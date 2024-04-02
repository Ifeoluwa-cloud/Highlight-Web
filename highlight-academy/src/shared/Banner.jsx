

const Banner = ({banner, heading, heading2, subheading, btn1, btn2}) => {
  return (
    <div className='gradientBg rounded-xl rounded-br-[80px] flex items-center justify-center mx-auto md:p-9 px-4 py-9'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
                {/* banner image */}
                <div className="flex items-center justify-center"><img src={banner} alt="banner" className='lg:h-[386px]'/>
                </div>
                {/* banner content */}
                <div className= {heading2 ? "md:w-4/5" : "md:w-3/5"}>
                    <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>{heading || heading2}</h2>
                    <p className='text-[#EBEBEB] text-2xl mb-8'>
                        {subheading}
                    </p>
                    <div className='space-x-5 space-y-4'>
                        <button className={btn1 ? 'btnPrimary' : ""}>{btn1}</button>
                        <button className={btn2 ? 'btnPrimary': "" }>{btn2}</button>
                    </div>
                </div>
            </div>
      </div>
  )
}

export default Banner
