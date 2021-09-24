import React from "react"
import { useEffect, useState } from "react"
import {interval, Subject} from "rxjs"
import { takeUntil } from "rxjs/operators"
import styled from "styled-components"
import Button from "../styles/Button";
import DoubleClick from "./DoubleClick";

export const StyledHome = styled('div')`
  padding: 1rem;
  width: 100%;
  margin: 0 auto;

  h1 {
    margin: 1rem;
    color: #321c00;
  }

  @media screen and (max-width: 1093px) {
    width: 95%;
  }
  @media screen and (max-width: 1090px) {
    width: 99%;
  }
  @media screen and (max-width: 870px) {
    width: 90%;
  }
  @media screen and (max-width: 670px) {
    width: 99%;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
  }
  @media screen and (max-width: 530px) {
    width: 100%;
  }
`;
const ShadowWrapper = styled('div')`
  overflow:hidden;
  
`;
const TimerWindow = styled('div')`
  padding: 1rem;
  width: 28rem;
  margin: 1rem;
  font-size: 5rem;
  background-color: black;
  color: darkorange;
  text-align: center;
`;


function Timer() {
    const [sec, setSec] = useState(0)
    const [position, setPosition] = useState("stop")

    useEffect (() => {
        let stream$ = new Subject()
        let timerObservable = interval(1000)
        timerObservable.pipe(takeUntil(stream$)).subscribe(
            () => {
                if(position ==='start'){
                    setSec(val => val + 1000)
                }
            }
        );




        return () => {
            stream$.next()
            stream$.complete()
        }
    }, [position])

    const start = () => {
        setPosition("start")
    }


    const stop = () => {
        setPosition("stop")
        setSec(0);
    }

    const reset = () => {
        setSec(0)
    }

    /*const wait = () => {
        setPosition("wait")

    }*/

    const clickHandler = () => {
        console.log("Click");
    }
    const doubleClickHandler = () => {
        setPosition("wait")
        console.log("Double Click");
    }


        return (
        <StyledHome>
            <ShadowWrapper>
                <h1>RxJS & React Timer (test task)</h1>
                    <TimerWindow> {new Date(sec).toISOString().slice(11, 19)} </TimerWindow>
                    <Button grey onClick = {start}>Start</Button>
                    <Button onClick = {stop}>Stop</Button>
                    <Button onClick = {reset}>Reset</Button>
                    {/*<Button grey onDoubleClick = {wait}>Wait</Button>*/}
                    <DoubleClick onClick={clickHandler} onDoubleClick={doubleClickHandler}>
                        <Button grey >Wait</Button>
                    </DoubleClick>
            </ShadowWrapper>
        </StyledHome>
    );

}

export default Timer;