
import { useInView } from "react-intersection-observer";

const Heading = ({children, size, underlineAnimation, hideUnderlineOnMobile, className}) => {
    
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.95,
    });

    switch(size) {

        case 'h1':
            return <h1 ref={ref} className={`relative w-fit text-[#333] font-bebas-neue text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-semiBold z-20 mb-[2rem] md:mb-6 !leading-[0.85] pb-1 xl:pb-0  tracking-[-0.5px]  ${className ? className : ""}`}>
                        {children} 
                        <div className={`${hideUnderlineOnMobile ? 'hidden' : 'block'} md:block md:absolute h-[5px] sm:h-2 left-0 bottom-[2px] sm:bottom-[2px] md:bottom-[-5px] xl:bottom-[2px] bg-[#76b375] z-20 duration-1000 ${underlineAnimation && inView ? 'w-[103%]' : 'w-0'}`}>
                          <svg className={`absolute bottom-[0px] w-[95px] ${inView && 'delay-[.6s]'} duration-1000 origin-bottom-left ${underlineAnimation && inView ? 'h-[55px] sm:h-[70px] xl:h-[95px] w-[55px] sm:w-[70px] xl:w-[95px] right-[-73px] sm:right-[-68px]  md:right-[-61px] xl:right-[-83px]' : 'h-[0px] right-[-47px] duration-200'} self-end`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <path fill="#76b375" d="M15.787 7.531c-5.107 2.785-12.72 9.177-15.787 15.469h2.939c.819-2.021 2.522-4.536 3.851-5.902 8.386 3.747 17.21-2.775 17.21-11.343 0-1.535-.302-3.136-.92-4.755-2.347 3.119-5.647 1.052-10.851 1.625-7.657.844-11.162 6.797-8.764 11.54 3.506-3.415 9.523-6.38 12.322-6.634z"/>
                          </svg>
                        </div> 
                    </h1>
        case 'h2':
            return <h2 ref={ref} className={`text-[#333] w-fit font-bebas-neue text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semiBold z-20 mb-[1.5rem] md:mb-6 ${className ? className : ""}`}>
                        {children}
                        <div className={`absolute h-[5px] sm:h-2 left-0 bottom-0 bg-[#76b375] z-20 duration-1000 ${underlineAnimation && inView ? 'w-[103%]' : 'w-0'}`}>
                            <svg className={`absolute bottom-0 self-end ${underlineAnimation && inView ? 'w-[47px] sm:w-[72px] h-[47px] sm:h-[72px] right-[-42px] sm:right-[-64px] delay-[.6s] duration-1000' : 'duration-200 delay-0 h-[0px] !right-[-11px]'} `} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#76b375" d="M15.787 7.531c-5.107 2.785-12.72 9.177-15.787 15.469h2.939c.819-2.021 2.522-4.536 3.851-5.902 8.386 3.747 17.21-2.775 17.21-11.343 0-1.535-.302-3.136-.92-4.755-2.347 3.119-5.647 1.052-10.851 1.625-7.657.844-11.162 6.797-8.764 11.54 3.506-3.415 9.523-6.38 12.322-6.634z"/>
                            </svg>
                        </div>   
                    </h2>
        case 'h3':
            return <h3 className={`text-[#333] font-bebas-neue text-4xl sm:text-4xl md:text-5xl font-semiBold z-20 md:mb-6 ${className ? className : ""}`}>{children}</h3>
        case 'h4':
            return <h4 className={`text-[#333] font-bebas-neue text-2xl sm:text-2xl md:text-3xl font-semiBold z-20 md:mb-6 tracking-[1px] ${className ? className : ""}`}>{children}</h4>
        default:
            return null
    }

}

export default Heading