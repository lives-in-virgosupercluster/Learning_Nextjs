import Link from "next/link";

const EventsPerCatPage=()=>{
    return <div>
        <h1>Events in London</h1>
        <Link href='/event/event1'>Event 1</Link>
        <Link href='/event/event2'>Event 2</Link>
        <Link href='/event/event3'>Event 3</Link>
        <Link href='/event/event4'>Event 4</Link>
        <Link href='/event/event5'>Event 5</Link>
        <Link href='/event/event6'>Event 6</Link>
    </div>
}
export default EventsPerCatPage;
export async function getStaticPaths(){
    const {events_categories}=await import('/data/data.json');
    const allPaths=events_categories.map((ev)=>{
        return {
            
                params:{
                    cat:ev.id.toString(),
    
                },
            
        };
    });
    console.log(allPaths);
 
    return {
       paths:allPaths,
       fallback:false,

      
    };
}
export async function getStaticProps(context){
    console.log(context);
    const id=context?.params.cat;
    const  {allEvents}=await import('/data/data.json');
     const data=allEvents.filter(ev=>ev.city===id)
     console.log(data);
    return {
        props:{data}
    };
}