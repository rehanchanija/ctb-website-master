import Programmes from "./programmes";
export default function OurPragrammes() {
    return (
        <section className="p-8 font-bebas flex flex-col justify-center items-center w-full lg:h-[60vh] gap-5 md:gap-8 bg-white
        ">
            <div>
                <h1 className="text-4xl  text-primary ">our programmes</h1>
            </div>
            <div className="flex flex-wrap justify-around items-center text-primary w-5/6" >
                <Programmes img="/images/education.png" heading="EDUCATION" para="Education, nutrition and holistic development of children" />
                <Programmes img="/images/helth.png" heading="HELTHCARE" para="Taking healthcare services to doorsteps of hard to reach communities" />
                <Programmes img="/images/emp.png" heading="EMPLOYMENT" para=" Empowering adolescent girls & women through community engagement" />
            </div>
        </section>
    )
}


