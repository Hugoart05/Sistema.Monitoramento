import { useContext, useEffect } from "react";
import { MonitorProperties } from "../../Types/Monit";
import * as C from './styles'
import { SignalRContext } from "../../context/SignalRProvider";

function Monitor({ deviceType, ip, isMonitoring, nome, pingResult }: MonitorProperties) {

    SignalRContext.useSignalREffect("sendmessage", function (message) {
        console.log(message)
    }, [isMonitoring])

    SignalRContext.useSignalREffect("PingResult", function (message) {
        console.log(message)
        pingResult = message
    }, [isMonitoring])


    useEffect(()=>{
        if(isMonitoring){
            const timer = setInterval(()=>{
                SignalRContext.invoke("MonitLatency", ip)
            }, 3000)
        }
    },[isMonitoring,ip])
    
    if (!isMonitoring){
        return (
            <C.MonitContainer>
                <C.Info className="text-center">Selecione um dispositivo</C.Info>
            </C.MonitContainer>
        )
    }
       

    if (deviceType == 'camera') {
        return (
            <p>é uma camera</p>
        )
    }

    if (deviceType == 'DVR') {
        return (
            <div>
                <button className="btn btn-primary" onClick={() => { SignalRContext.invoke("pingresult", "ola") }}>message</button>
            </div>
        )
    }

    return (
        <C.MonitContainer>
            <C.MonitInfo>
                <C.Info>Nome: {nome}</C.Info>
                <C.Info>Ip: {ip}</C.Info>
                <C.Info>mac: </C.Info>
            </C.MonitInfo>
            <C.MonitConnectionResult>
                <C.PingCircleIndicator>
                    <C.PingTitleContainer>
                        <C.PingTitle>Ping</C.PingTitle>
                    </C.PingTitleContainer>
                    <C.PingTitleContainer>
                        <C.Ping>{pingResult}</C.Ping>
                        <C.UnidadeTempo>ms</C.UnidadeTempo>
                    </C.PingTitleContainer>
                </C.PingCircleIndicator>
            </C.MonitConnectionResult>
        </C.MonitContainer>
    );
}

export default Monitor;