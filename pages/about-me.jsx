import MainLayout from '../src/layouts/MainLayout';
export default function About() {
    return (
      <MainLayout>
        <div className="min-h-screen w-full py-20">
          <div className=" mx-auto w-full sm:w-[620px] lg:w-[750px] xl:w-[900px] px-4">
            <div className="title text-3xl md:text-4xl lg:text-5xl mb-6 lg:mb-10">About me</div>
            <div className="basic-info text-xl md:text-2xl lg:text-4xl">
              {`"I am a self-taught front-end developer and my expertise is to build and design functionable web application's user interface."`}
            </div>
            <div className="mt-10">
              <div className="personal-info">
                <div className="label text-2xl md:text-3xl lg:text-4xl text-orange">Personal Information And Contacts</div>
                <div className="text-xl md:text-2xl pl-4 mt-2 space-y-1">
                  <div className="name"><span className="text-orange mr-1">Name:</span> <span>Juan Carlo I. Onciangco</span> </div>
                  <div className="age"><span className="text-orange mr-1">Age:</span> <span>24 years old</span> </div>
                  <div className="college-degree"><span className="text-orange mr-1">College Degree:</span> <span>Bachelor of Science in Computer Engineering</span></div>
                  <div className="college-degree"><span className="text-orange mr-1">University:</span> <span>Bulacan State University</span></div>
                  <div className="address"><span className="text-orange mr-1">Email:</span> <span className="font-sans text-lg font-bold">ohjuan205@gmail.com</span> </div>
                  <div className="address"><span className="text-orange mr-1">Phone No.:</span> <span>09277778370</span> </div>
                  <div className="address"><span className="text-orange mr-1">Address:</span> <span>Zone 4 Sagrada Familia, Hagonoy Bulacan</span> </div>
                </div>
              </div>
            </div>
            <div className="resume mt-10">
              <a href="https://drive.google.com/file/d/1C8mHS9BCBrsIj_wHBgbzQvHe8TvO_7rO/view?usp=sharing" target="_blank" rel="noreferrer"  className="block text-xl rounded-md text-white bg-orange w-max  px-6 py-2">
                VIEW RESUME
              </a>
            </div>
          </div>
        </div>
      </MainLayout>
    ) 
}