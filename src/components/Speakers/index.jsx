const Speakers = () => {
    return (
        <div>
            < div className=" py-8" >
                <h1 className=" text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-left pl-[12%] text-white">Speakers</h1>

                <div className="grid place-items-center pr-[40%] py-8">

                    <hr className="gradient-line w-3/5" />
                </div>
            </div >

            <div className="grid grid-cols-1 gap-8">
                <div className="flex pl-40 flex-row items-center justify-center">
                    <div>
                        <img src="/static/images/speakers/1.jpg" alt="Speaker" className="rounded-full max-w-[200px]" />
                    </div>
                    <div className="pl-10 pr-60">
                        <h1 className="grad-text text-5xl font-bold">Rolina Wu</h1>
                        <h1 className="text-white pt-5 pb-3 text-2xl font-bold">Workshop - Writing Meta Scale Software - How Coding Powers Meta’s Planetary Scale Applications
                        </h1>

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
                        <h1 className="text-white pt-5 pb-3 text-2xl font-bold">Workshop - Writing Meta Scale Software - How Coding Powers Meta’s Planetary Scale Applications
                        </h1>

                        <h1 className="text-white text-xl">Joseph Lu is a software engineer at Meta. At Meta, Joseph focuses on building scalable Infra software. In this talk, Joseph will join Rolina to share his life at Meta and the challenges behind building software system to support massive scale of users.

                        </h1>
                    </div>
                </div>
                <br /><br /><br />
                <div className="flex pl-40 flex-row items-center justify-center">
                    <div>
                        <img src="/static/images/speakers/3.png" alt="Speaker" className="rounded-full max-w-[200px]" />
                    </div>
                    <div className="pl-10 pr-60">
                        <h1 className="grad-text text-5xl font-bold">Lillian Nose</h1>
                        <h1 className="text-white pt-5 pb-3 text-2xl font-bold">Workshop- API's 101</h1>

                        <h1 className="text-white text-xl">I'm Lillian Nose, a Developer Advocate for the Student Programs team at Postman. I'm a recent graduate with prior experience at Google, and lots of involvement with hackathons during my college years. My passion lies in working with students, providing them with opportunities to learn and explore the world of tech. In my workshop, "APIs 101," I aim to demystify the concept of APIs and share their significance in the modern tech landscape. Join me at OneHacks III as we embark on a journey to unlock the potential of APIs together.
                        </h1>
                    </div>
                </div>
                <br /><br /><br />
                <div className="flex pl-40 flex-row items-center justify-center">
                    <div>
                        <img src="/static/images/speakers/4.jpg" alt="Speaker" className="rounded-full max-w-[200px]" />
                    </div>
                    <div className="pl-10 pr-60">
                        <h1 className="grad-text text-5xl font-bold">Jacob MacMillan</h1>
                        <h1 className="text-white pt-5 pb-3 text-2xl font-bold">Workshop - Python Programming Primer</h1>

                        <h1 className="text-white text-xl"> Mr. MacMillan is Valley Christian High School's programming teacher. Walk with Mr. MacMillan through a brief crash course in how to write code in the Python programming language. Learn what programming is and make a short number guessing game by the end of the workshop!

                        </h1>
                    </div>
                </div>
                <br /><br /><br />
                <div className="flex pl-40 flex-row items-center justify-center">
                    <div>
                        <img src="/static/images/speakers/5.jpg" alt="Speaker" className="rounded-full max-w-[200px]" />
                    </div>
                    <div className="pl-10 pr-60">
                        <h1 className="grad-text text-5xl font-bold">Sammy</h1>
                        <h1 className="text-white pt-5 pb-3 text-2xl font-bold">Workshop - How to Make a Real User Login System</h1>

                        <h1 className="text-white text-xl"> Sammy is incredibly passionate about coding and has been coding for years. She joined the Qoom team during the summer of 2021 looking to share that passion with others!


                        </h1>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Speakers;
