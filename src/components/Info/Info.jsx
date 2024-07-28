export default function Infob(){

    return(
        <div>
            <div className=" container mx-auto px-4 text-xl flex justify-center items-center flex-col py-32">

               
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4  justify-between text-xl">
                    <div>
                            <h3 className="line text-5xl">LOCATION</h3>
                            <p>2215 John Daniel Drive
                            </p>  
                            <p>Clark, MO 65243</p>
                    </div>
                
                    <div>
                            <h2 className="line text-5xl">AROUND THE WEB</h2>
                            
                            <div 
                             className="icons">
                                <i 
                                 className="fa-brands fa-facebook mx-1 icon "></i>
                                <i 
                                 className="fa-brands fa-twitter mx-1 icon"></i>
                                <i 
                                 className="fa-brands fa-linkedin-in mx-1 icon "></i>
                            <i 
                             className="fa-solid fa-globe mx-1 icon"></i></div>
                            
                    </div>
                    <div>
                            <h2 className="line text-5xl">ABOUT FREELANCER</h2>
                            <p className="">Freelance is a free to use,
                                licensed Bootstrap theme created by Route</p>
                    </div>
                </div> 
                </div>
        </div>
    )
}