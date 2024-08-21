import Impect from "./impect";

export default function Ourimpact() {
    return (
        <section className="p-8 flex flex-col justify-center items-center w-full lg:h-[75vh] gap-6 md:gap-10 bg-[#F3F2F3]">
            <div>
                <h1 className="text-4xl font-bebas">Our impact</h1>
            </div>
            <div className="inline-flex flex-wrap justify-center md:justify-around  font-poppins text-primary  gap-y-6 w-full" >
                <Impect number="15+" heading="LAC" para="children andt heir families are impacted every year" />
                <Impect number="2000+" heading="VILLAGES" para="and slums are reached out to across the country" />
                <Impect number="400+" heading="PROJECTS" para="education, healthcare,and women empowerment" />
                <Impect number="25+" heading="STATES" para="are reached  including the remotest areas" />
            </div>
        </section>
    )
}


