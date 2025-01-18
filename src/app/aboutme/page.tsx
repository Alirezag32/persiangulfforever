export default function AboutMe() {
  return (
    <div className="mt-[11vh]">
   
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">درباره من</h1>

     
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">من کی هستم؟</h2>
          <p className="text-xl text-gray-700 mb-8">
            سلام! من علیرضا گراوند هستم. یک دانش‌آموز با علاقه زیادی به تکنولوژی
            و توسعه نرم‌افزار. همیشه سعی می‌کنم مهارت‌ها و دانش خودم رو به روز
            نگه دارم و به صورت عملی پروژه‌هایی رو انجام بدم که به من کمک کنه
            بیشتر یاد بگیرم و تجربه‌های جدید به دست بیارم.
          </p>
          <p className="text-xl text-gray-700 mb-8">
            در حال حاضر بیشتر روی پروژه‌های توسعه وب کار می‌کنم و با استفاده از
            ابزارهایی مثل **Next.js**, **React** و **Tailwind CSS** وب‌سایت‌های
            زیبا و کاربرپسند می‌سازم. علاوه بر این، به زبان‌های برنامه‌نویسی مثل
            **JavaScript** و **TypeScript** هم تسلط دارم.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">اهداف و انگیزه‌ها</h2>
          <p className="text-xl text-gray-700 mb-8">
            من همیشه به دنبال یادگیری چیزهای جدید و چالش‌های جدید هستم. هدف من
            این است که در آینده تبدیل به یک توسعه‌دهنده حرفه‌ای بشم و پروژه‌هایی
            که می‌سازم، زندگی و کسب‌وکارهای مردم رو ساده‌تر و کارآمدتر بکنه.
          </p>
          <p className="text-xl text-gray-700 mb-8">
            از جمله اهداف من این است که در زمینه‌های **طراحی تجربه کاربری (UX)**
            و **برنامه‌نویسی سمت سرور** هم به مهارت‌های بیشتری دست پیدا کنم و
            بتونم پروژه‌های پیچیده‌تری را مدیریت و توسعه بدم.
          </p>
        </section>


        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">پروژه‌های اخیر</h2>
          <ul className="list-disc pl-6">
            <li className="text-xl text-gray-700 mb-4">
              ساخت وب‌سایتی برای نمایش وضعیت آب و هوا با استفاده از **Next.js**
              و **OpenWeatherMap API**.
            </li>
            <li className="text-xl text-gray-700 mb-4">
              طراحی و توسعه وب‌سایتی برای ردیابی زمان مطالعه با استفاده از
              **Chart.js** برای نمایش گرافیکی داده‌ها.
            </li>
            <li className="text-xl text-gray-700 mb-4">
              پیاده‌سازی سیستم ورود و ثبت‌نام در یک وب‌سایت با استفاده از
              **Firebase** برای احراز هویت کاربران.
            </li>
          </ul>
        </section>


        
      </div>
    </div>
  );
}
