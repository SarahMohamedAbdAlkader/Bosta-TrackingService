

import qs from 'qs'
import React, { useState, useEffect } from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import reportImage from '../../imgs/reportImage.jpg'
var daysOfWeek = ["السبت", "الاحد", "الأثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعه",];
const Shipping = (props) => {
    const track_num = qs.parse(props.location.search, { ignoreQueryPrefix: true }).track_num
    const [isLoading, setLoading] = useState(true);
    const [state, setState] = useState();
    const [trackingNum, setTrackingNum] = useState(0);
    const [transitEvents, setTransitEvents] = useState([]);
    const [day, setDay] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [hub, setHub] = useState("");
    const [progress, setProgress] = useState(0);
    const [color, setColor] = useState("red");
    const [newarray, setArray] = useState([]);
    const [ currentlyReason,  setCurrentlyReason] = useState("");
    const [reasonOfCancel, setReasonOfCancel] = useState("");
   
    const arabicCard = () => {
        return (
            <div className="container ">
                <div className="card p-1">
                    <div className="card-body ">
                        <div className="card-text row m-auto " style={{ direction: "rtl" }}>
                            <div className="col">
                                <div className="row" style={{ color: "gray" }}>
                                    رقم الشحنة {trackingNum}
                                </div>
                                <div className="row " style={{ color: `${color}`, fontWeight: "bold" }}>{state}
                                </div>
                            </div>
                            <div className="col">
                                <div className="row" style={{ color: "gray" }}>
                                    أخر تحديث
   </div>
                                <div className="row " style={{ fontWeight: "bold" }}>at {time} {day} {date}
                                </div>
                            </div>
                            <div className="col">
                                <div className="row" style={{ color: "gray" }}>
                                    اسم التاجر
</div>
                                <div className="row " style={{ fontWeight: "bold" }}>SOUQ.com </div>
                            </div>
                            <div className="col">
                                <div className="row" style={{ color: "gray" }}>
                                    موعد التسليم خلال
</div>
                                <div className="row " style={{ fontWeight: "bold" }}>٣ يناير ٢٠٢٠</div>
                            </div>
                        </div>
                        <div>
                            <hr className="solid" />
                        </div>
                        <div className=" progressBar mt-5">
                            <ProgressBar
                                className="progressBar"
                                percent={progress}
                                filledBackground={color}
                                width="98%"
                            >
                                <Step transition="scale">
                                    {({ accomplished }) => (
                                        accomplished ? <i style={{ backgroundColor: `${color}` }} className="fa fa-check rounded-circle" /> : <i className="fa fa-floppy-o rounded-circle" />)}
                                </Step>
                                <Step transition="scale">
                                    {({ accomplished }) => (
                                        accomplished ? <i style={{ backgroundColor: `${color}` }} className="fa fa-check rounded-circle" /> : <i className="fa fa-check rounded-circle" />)}
                                </Step>
                                <Step transition="scale">
                                    {({ accomplished }) => (
                                        accomplished ? <i style={{ backgroundColor: `${color}` }} className="fa fa-check rounded-circle" /> : <i className="fa fa-truck rounded-circle" />)}
                                </Step>
                                <Step transition="scale">
                                    {({ accomplished }) =>( accomplished ? <i style={{ backgroundColor: `${color}` }} className="fa fa-check rounded-circle" /> : <i className="fa fa-floppy-o rounded-circle" />
    )}
                                </Step>
                            </ProgressBar>
                        </div>
                        <div className="card-text row  mt-2" style={{ direction: "rtl", fontWeight: "bold", fontSize: "small" }}>
                            <div className=" mt-3 ">
                                <div className="ml-5" >                         تم إنشاء الشحنة
   </div>
                            </div>
                            <div className="col mt-3 mr-5">
                                <div  >
                                    تم استلام الشحنة من التاجر
   </div>
                            </div>
                            <div className="col mt-3 mr-5 ">
                                <div  >الشحنة خرجت للتسليم</div>
                                    <div className="ml-4"style={{color :`${color}`}}>{currentlyReason}</div>
                            </div>
                            <div className="col mt-3 mr-5">
                                تم التسليم
</div>
                        </div>
                    </div>
                </div>
                <br />  <br />  <br />
                <div className="row">
                    <div className="col-5 ">
                        <div className="">
                            <h5 className="row d-flex justify-content-end mr-1 mb-3" >عنوان التسليم  </h5>
                            <div className=" col-12 p-3" style={{ backgroundColor: "rgba(184, 179, 179, 0.080)" }}>
                                <p className="text-right"> امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل ١٧ بلوك ٣٣...القاهرة  </p>
                            </div>
                            <br />
                            <div className=" col-12  " style={{ border: "3px solid rgba(184, 179, 179, 0.090)" }}>
                                
                                <div className="row d-flex justify-content-between" >
                                <div className="col mt-5 ">
                                <strong >هل يوجد مشكلة في شحنتك؟
                                
                                </strong>
                                <button className="btn col text-white text-center rounded w-75 mt-2" style={{ backgroundColor: "red" }}>إبلاغ عن مشكلة</button>
                                </div>
                                <div ><img width="150px" height="150px"src={reportImage}/></div>
                                </div>
                                
                               
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <h5 className="d-flex justify-content-end  mb-3">تفاصيل الشحنة </h5>
                        <table className="table" style={{ border: "3px solid rgba(184, 179, 179, 0.090)" }}>
                            <thead>
                                <tr className="text-right" style={{ backgroundColor: "rgba(184, 179, 179, 0.080)", color: "gray" }}>
                                    <th scope="col"  >تفاصيل</th>
                                    <th scope="col">الوقت</th>
                                    <th scope="col">التاريخ</th>
                                    <th scope="col">الفرع</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {
                                    newarray.map((data, index) => {
                                        return <tr className="text-right " key={index} >
                                            <td className=" p-3" > {data.state=="لم يتم التسليم"? <div>{data.state}<br/><div style={{fontSize:"12px",color:"#ffb404"}}>{reasonOfCancel}</div></div>:data.state} </td>
                                            <td className=" p-3" > {data.time.newHour}:{data.time.minutes} {data.time.amOrpm}</td>
                                            <td className=" p-3">{data.time.lastDate}</td>
                                            <td className=" p-3">{data.hub || convertToArabic(hub)}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
    const convertToArabic = (state) => {
        switch (state) {
            case "TICKET_CREATED":
                {
                    setState("تم إنشاءالشحنه")
                    setProgress(0);
                    return "تم إنشاء الشحنه"
                }
            case "DELIVERED_TO_SENDER": {
                setState(" تم إرجعاها للعمل")
                setProgress(66)
                setColor("red");
                setCurrentlyReason("تم إلغاء الشحنة")
                return "تم إرجاعها للعمل  "
            }
            case "DELIVERED": {
                setState("تم تسليم الشحنة")
                setProgress(100)
                setColor("green");
                return "تم تسليم الشحنة"
            }
            case "WAITING_FOR_CUSTOMER_ACTION":{
                setState("لم يتم التسليم ")
                setProgress(66)
                setColor("red");
                return "لم يتم التسليم"
            }
            case "OUT_FOR_DELIVERY": {
                setState("الشحنة خرجت للتسليم")
                setProgress(67)
                setColor("red");
                return ("الشحنة خرجت للتسليم")
            }

            case "PACKAGE_RECEIVED" : {
                setState("تم استلام الشحنه من التاجر")
                setProgress(34)
                return ("تم استلام الشحنه من التاجر")
            }
            case "Mohandseen Hub":
                return "فرع المهندسين";
            case "Tanta Hub":
                    return "فرع طنطا";
            case "Bosta HQ":
                    return "الفرع الرئيسي"
            case "Katamya Hub":
                    return "فرع القطامية"
           case "Cairo Sorting Facility":
                     return "مكتب بريد القاهرة"                         
            default: return state;
        }
       
    }
    const arrayFn = (e) => {
        const arr = []
        
        e.map((item) => {
            if (item.state === "TICKET_CREATED" || item.state === "PACKAGE_RECEIVED" || item.state === "OUT_FOR_DELIVERY" || item.state === "DELIVERED_TO_SENDER" || item.state === "DELIVERED" || item.state === "WAITING_FOR_CUSTOMER_ACTION" ) {
                arr.push({ state: convertToArabic(item.state), time: convertTimeStamp(item.timestamp), hub: convertToArabic(item.hub) })
            }
            if (item.state ==="WAITING_FOR_CUSTOMER_ACTION"){
                if(item.reason)
                {setReasonOfCancel(item.reason);
                    
                    setColor("yellow")
                    
                console.log(item.reason)}
            }
           
            return arr
        })
        setArray(arr)
        return arr
    }
    const convertDay = (dayNum) => {
        daysOfWeek.map((day, index) => {
            if (dayNum === index) {
                setDay(day);
                return day;
            }
            return null; 
        }
        )
       
    }
    const convertTimeStamp = (timeStamp) => {
        const date = new Date(timeStamp.split("T")[0]);
        const hour = new Date(timeStamp).getHours() - 2;
        let minutes = new Date(timeStamp).getMinutes();;
        const day = date.getDay();
        let amOrpm = "am"
        let newHour = hour;
        const lastDate = timeStamp.split("T")[0].split('-').reverse().join('/');
        if(minutes < 10){
minutes="0"+minutes
        }
        if (hour > 12) {
            newHour = hour - 12;
            amOrpm = "pm"
            setTime(newHour + ":" + minutes + "pm")
        }
        else { setTime(hour + ":" + minutes + "am"); amOrpm = "am" }
        return { date, newHour, minutes, day, amOrpm, lastDate }
    }
    useEffect(() => {
        //6636234, 7234258, 9442984,1094442
        const url = `https://cors-anywhere.herokuapp.com/https://tracking.bosta.co/shipments/track/` + track_num
        fetch(url,
           
            {headers: {'Access-Control-Allow-Origin': '*'}
       }) // https://cors-anywhere.herokuapp.com/https://example.com
            .then(response => response.json())
            .then(contents => {
                setLoading(false);
                setTrackingNum(contents.TrackingNumber);
                setTransitEvents(contents.TransitEvents);
                arrayFn(contents.TransitEvents);
                if(contents.CurrentStatus.reason){setCurrentlyReason(contents.CurrentStatus.reason)}
                const timeObj = convertTimeStamp(contents.CurrentStatus.timestamp);
                setDate(timeObj.lastDate);
                convertDay(timeObj.day)
                setHub(contents.TransitEvents[1].hub)
                convertToArabic(contents.CurrentStatus.state); console.log(contents.CurrentStatus)
            })
            .catch((error) => console.log(error))
    }, [])
    return (isLoading ?
        <h1 className="text-center mt-5">is Loading....</h1>
        : arabicCard());
}
export default Shipping;

