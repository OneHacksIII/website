const Speakers = () => {
    return (
        <div>
            < div className=" py-8" >
                <h1 className=" text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-left pl-[12%] text-white">Speakers</h1>

                <div className="grid place-items-center pr-[40%] py-8">

                    <hr className="gradient-line w-3/5" />
                </div>
            </div >

            <div className="grid grid-cols-1 gap-4">
                <div className="flex pl-40 flex-row items-center justify-center">
                    <div>
                        <img src="/static/images/speakers/1.jpg" alt="Speaker" className="rounded-full max-w-[200px]" />
                    </div>
                    <div className="pl-10 pr-60">
                        <h1 className="grad-text text-5xl font-bold">Rolina Wu</h1>
                        <h1 className="text-white pt-5 pb-3 text-2xl font-bold">Workshop- Writing Meta Scale Software - How coding powers Meta’s planetary scale applications</h1>

                        <h1 className="text-white text-xl">Rolina Wu is a software engineering in Meta. Her work mainly focuses on building scalable software for Meta’s Network. Join Rolina and Joseph on this crash course in the interactions that go behind the scenes when you launch Meta products and learn what it takes to develop software at Meta’s scale.
                        </h1>
                    </div>
                </div>
                <div className="flex pl-40 flex-row items-center justify-center">
                    <div>
                        <img src="/static/images/speakers/2.png" alt="Speaker" className="rounded-full max-w-[200px]" />
                    </div>
                    <div className="pl-10 pr-60">
                        <h1 className="grad-text text-5xl font-bold">Joseph Lu</h1>
                        <h1 className="text-white pt-5 pb-3 text-2xl font-bold">Workshop- Writing Meta Scale Software - How coding powers Meta’s planetary scale applications</h1>

                        <h1 className="text-white text-xl">Joseph Lu is a software engineer at Meta. At Meta, Joseph focuses on building scalable Infra software. In this talk, Joseph will join Rolina to share his life at Meta and the challenges behind building software system to support massive scale of users."

                        </h1>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default Speakers;
