'use client'
import { add, addDays, addHours, eachDayOfInterval, eachMinuteOfInterval, endOfDay, endOfMonth, endOfWeek, format, getDay, isAfter, isBefore, isEqual, isSameMonth, isThisMonth, isToday, parse, parseISO, set, startOfDay, startOfToday, startOfWeek, startOfYesterday } from "date-fns";
import React, { useEffect } from 'react'
import { useMemo, useState } from "react"
import { cn, dayNames } from "../../lib/utils"
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
import AvailableHours from "./Componets/AvailableHours"
import TimesBar from './Componets/TimesBar'
import { addToDatabase, fetchDocument } from '../../app/myCodes/Database'
import { checkColor, monthColor, weekDayColor, weekendColor } from "./Meta";
import BookingOptions from "./Componets/BookingOptions";

let colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7"
]

function Booking({ myPackage }) {
    const [adminDATA, setAdminDATA] = useState({})
    const reservations = adminDATA?.allRes ? adminDATA?.allRes : []
    const [booktype, setBooktype] = useState()
    console.log(booktype)


    const [bookingInfo, setBookingInfo] = useState({})
    const [reload, setReload] = useState(false)
    // display div of availables times
    const [calendarTouched, setCalendarTouched] = useState(false)
    // handle dates
    let today = startOfToday()
    let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"))
    let [selectedDay, setSelectedDay] = useState(today)
    let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date())
    let days = useMemo(
        () =>
            eachDayOfInterval({
                start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
                end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 })
            }),
        [firstDayCurrentMonth]
    )

    // all days avaiilable times in this month until you change it
    const [availableTimesInThisMonth, setAvailableTimesInThisMonth] = useState([])
    const [
        availableTimesInThisMonthForEachDay,
        setAvailableTimesInThisMonthForEachDay
    ] = useState([])

    // next and prev month functions
    function prevMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
        setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"))
    }
    function nextMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
        setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"))
    }

    // get available times for the selected day
    const freeTimes = useMemo(() => {
        const StartOfToday = startOfDay(selectedDay)
        const endOfToday = endOfDay(selectedDay)
        // change your working hours here
        const startHour = set(StartOfToday, { hours: 9 })
        const endHour = set(endOfToday, { hours: 20, minutes: 0 })
        let hoursInDay = eachMinuteOfInterval(
            {
                start: startHour,
                end: endHour
            },
            { step: 360 }
        )

        // filter the available hours
        let freeTimes = hoursInDay.filter(
            hour => !reservations.includes(parseISO(hour.toISOString()).toString())
        )

        return freeTimes
    }, [selectedDay])

    // calculate the number of available times for each day in this month
    useMemo(() => {
        let thisMonthTimesLength = []
        let thisMonthTimesEachDay = []
        days.map((day, dayIdx) => {
            // get times

            const StartOfToday = startOfDay(day)
            const endOfToday = endOfDay(day)
            // change your working hours here
            const startHour = set(StartOfToday, { hours: 9 })
            const endHour = set(endOfToday, { hours: 20, minutes: 0 })
            let hoursInDay = eachMinuteOfInterval(
                {
                    start: startHour,
                    end: endHour
                },
                { step: 360 }
            )
            // filter the available hours
            let freeTimes = hoursInDay.filter(
                hour => !reservations.includes(parseISO(hour.toISOString()).toString())
            )
            thisMonthTimesLength.push(freeTimes.length)
            thisMonthTimesEachDay.push(freeTimes)
        })

        setAvailableTimesInThisMonth(thisMonthTimesLength)
        setAvailableTimesInThisMonthForEachDay(thisMonthTimesEachDay)
    }, [currentMonth])


    const total = booktype == 'Wig Class' ? 1850 : 300
    useEffect(() => {
        fetchDocument('Admin', 'reservations', setAdminDATA)

    }, [reload, calendarTouched, selectedDay])


    const bookNow = () => {

        fetch('/.netlify/functions/CheckOut', {
            method: 'POST',
            pinkirect: 'follow',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                price: 200,
                name: myPackage.type
            })
        }).then(res => {
            res.json().then(res => {

                window.location.href = res.url

            })
        })
    }
    return (
        <div className=' bg-white  m-auto w-full text-black h-full '>
            <h1 className='text-5xl text-center mb-6 '>Services</h1>
            <BookingOptions booktype={booktype} setBooktype={setBooktype} />



            {booktype == "Wig Class" &&
                <div>
                    <h1 className='text-center'>Select your reservation</h1>
                </div>
            }
            {
                <div className={`${booktype == "Wig Class" ? 'opacity-100' : 'opacity-0 z-0'} trans flex flex-col  md:flex-row   md:items-start  lg:justify-center    mb-10 md:mb-24`}>


                    {/* calendar implementation */}
                    <div className="flex flex-col gap-2 h-[450px] w-[380px] md:h-fit md:w-fit mb-10 fadeInZoom m-auto my-0">
                        {/* calendar header */}
                        <div className="grid grid-cols-3 md:w-[40rem] px-8">
                            <button
                                type="button"
                                onClick={prevMonth}
                                disabled={isThisMonth(new Date(currentMonth))}
                            >
                                <ChevronLeft
                                    size={20}
                                    aria-hidden="true"
                                    color='pink'
                                    className={cn(
                                        isThisMonth(new Date(currentMonth)) && "text-pink-400"
                                    )}
                                />
                            </button>
                            <h2 className={`font-semibold ${monthColor} justify-center flex text-center`}>
                                {format(firstDayCurrentMonth, " MMMM yyyy")}
                            </h2>
                            <button
                                type="button"
                                className="flex justify-end"
                                onClick={nextMonth}
                            >
                                <ChevronRight size={20} aria-hidden="true" color='pink' />
                            </button>
                        </div>

                        {/* calendar body */}
                        <div className='p-2'>
                            <div className="grid grid-cols-7 mt-4 md:w-[40rem]">
                                {dayNames.map((day, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className={cn(
                                                `flex justify-center items-center text-sm ${weekDayColor} w-full py-2`,
                                                {
                                                    [weekendColor]:
                                                        day === "Sun" || day === "Sat"
                                                }
                                            )}
                                        >
                                            {day}
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="grid grid-cols-7 text-sm gap-2 md:w-[40rem]">
                                {days.map((day, dayIdx) => {
                                    return (
                                        <div
                                            key={day.toString()}
                                            className={cn(
                                                dayIdx === 0 && colStartClasses[getDay(day) - 1],
                                                " justify-center flex items-center",
                                                (getDay(day) === 0 || getDay(day) === 6) &&
                                                "style for sat and sun bg"
                                            )}
                                        >
                                            <button
                                                onClick={() => {
                                                    setCalendarTouched(true)
                                                    setSelectedDay(day)
                                                }}
                                                className={cn(
                                                    "w-12 h-12 md:h-24 md:w-24 flex flex-col p-2 justify-center items-center rounded gap-0 group bg-black-800 relative group",
                                                    isEqual(day, selectedDay) &&
                                                    "bg-pink-600 text-pink-900 text-lg",
                                                    isEqual(today, day) && "text-blue-900 bg-pink-700",
                                                    isBefore(day, today) &&
                                                    "text-pink-800 bg-black-900  cursor-not-allowed",
                                                    isEqual(today, day) && "text-white bg-pink-700",
                                                    isBefore(day, today) && "cursor-not-allowed",
                                                    isEqual(day, selectedDay) &&
                                                    isToday(day) &&
                                                    "bg-pink-700",
                                                    !isEqual(day, selectedDay) &&
                                                    !isToday(day) &&
                                                    !isSameMonth(day, firstDayCurrentMonth) &&
                                                    "text-pink-300",
                                                    !isEqual(day, selectedDay) &&
                                                    !isToday(day) &&
                                                    isSameMonth(day, firstDayCurrentMonth) &&
                                                    "text-white"
                                                )}
                                                disabled={isBefore(day, today)}
                                            >
                                                {isAfter(day, startOfYesterday()) && (
                                                    <span className="hidden group-hover:flex absolute top-0 -translate-x-.5 -translate-y-4 z-10 text-[11px] bg-slate-900 text-slate-100 px-1 rounded-md gap-1">
                                                        <span>{availableTimesInThisMonth[dayIdx]}</span>
                                                        <span>Available</span>
                                                    </span>
                                                )}

                                                <time
                                                    dateTime={format(day, "yyyy-MM-dd")}
                                                    className={cn(
                                                        "group-hover:text-lg trans ",
                                                        (isEqual(day, selectedDay) || isToday(day)) &&
                                                        "font-semibold"
                                                    )}
                                                >
                                                    {format(day, "d")}
                                                </time>

                                                <CheckCircle2
                                                    className={cn(
                                                        "hidden",
                                                        isEqual(day, selectedDay) &&
                                                        `absolute block top-0 right-0 h-[18px] w-[18px] translate-x-1 -translate-y-1 ${checkColor}`,
                                                        isEqual(day, today) && "text-white"
                                                    )}
                                                />

                                                {isAfter(day, startOfYesterday()) && (
                                                    <TimesBar
                                                        times={availableTimesInThisMonthForEachDay[dayIdx]}
                                                    />
                                                )}
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className={cn(`hidden mx-auto fadeInZoom`, calendarTouched && "block")}>
                        <span className="flex items-center w-full justify-center gap-1">
                            <span>
                                <h1 className='text-center'>Select reservation time</h1>
                                <h1 className="text-center text-pink-400 font-semibold pl-1">
                                    {format(selectedDay, "dd MMMM yyyy").toString()}
                                </h1>
                            </span>
                        </span>

                        <AvailableHours freeTimes={freeTimes} setBookingInfo={setBookingInfo} reload={reload} setReload={setReload} />
                    </div>
                </div>

            }

            {booktype == "Bundle Construction" &&
                <div>
                    <h1 className='text-center'>Select your reservation</h1>
                </div>
            }


            {bookingInfo.apointment && <div className=' mb-96  center flex-col text-white p-2'>
                <h1 className='text-xl text-center'>{`Your reservation is on ${bookingInfo.apointment}`}</h1>
                <h1 className='text-center text-pink-700'>depoit $200 to comfirm booking</h1>
                <div className='center gap-1 my-4'>
                    <h1 className='text-center text-pink-700 text-5xl'>{'$' + total}</h1>
                    <h1>+ Tax</h1>
                </div>
                <button onClick={bookNow} className='h-12 w-32 bg-pink-700'>Book Now</button>
            </div>}

        </div>
    )
}

export default Booking