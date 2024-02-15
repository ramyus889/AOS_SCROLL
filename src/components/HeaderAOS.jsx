const HeaderAOS = () => {
  return (
    <div className="">
      <div className="" data-aos="zoom-out" data-aos-delay="1500">
        <img
          src="public/img/github_octocat.png"
          className="w-[4.5%] float-right pt-5 pe-5"
          alt=""
        />
      </div>
      <div
        className="text-center items-center justify-center pt-[357px] text-[60px] text-[#000000] font-bold opacity-[50%]"
        data-aos="zoom-in"
      >
        AOS
      </div>
      <div
        className="text-center text-white items-center justify-center pt-[40px] text-[24px]  "
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-delay="800"
      >
        Animate On Scroll Library
      </div>
      <div
        className="text-center text-white items-center justify-center pt-[387px] text-[16px]"
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-delay="800"
      >
        <a href="#about" className="">
          SCROLL DOWN
        </a>
        <div className="text-[30px] animate-bounce text-center text-red-500 items-center justify-center pt-[20px]">
          ▼
        </div>
      </div>
    </div>
  );
};

export default HeaderAOS;
