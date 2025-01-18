"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header/header"; 

export default function BlogPersianGulf() {
           const [comments, setComments] = useState<string[]>([]);
           const [newComment, setNewComment] = useState("");

           const handleAddComment = (e: React.FormEvent) => {
             e.preventDefault();
             if (newComment.trim() !== "") {
               setComments([...comments, newComment]);
               setNewComment("");
             }
           };
  return (
    <div className="mt-[11vh]">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          خلیج فارس: تاریخ و اهمیت آن
        </h1>

        <p className="text-xl text-gray-700 mb-8">
          خلیج فارس، یکی از مهم‌ترین و شناخته‌شده‌ترین مناطق دریایی جهان است که
          در جنوب غربی آسیا و بین ایران و شبه جزیره عربستان قرار دارد. این خلیج
          با ویژگی‌های طبیعی و تاریخی منحصر به فرد خود، در طول تاریخ نقشی بسیار
          حیاتی در ارتباطات دریایی، تجارت، و امنیت جهانی ایفا کرده است.
        </p>

        <div className="relative mb-12">
          <Image
            src="/13.webp"
            alt="Persian Gulf"
            className="w-full h-auto rounded-lg shadow-lg"
            width={2000}
            height={2000}
          />
          <div className="absolute bottom-4 left-4 text-white bg-opacity-60 bg-black p-2 rounded-lg">
            <p className="text-lg">تصویری از خلیج فارس</p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-6">تاریخچه خلیج فارس</h2>
        <p className="text-xl text-gray-700 mb-8">
          خلیج فارس از زمان‌های باستان محل سکونت تمدن‌های بزرگ و مرکز تجارت
          جهانی بوده است. در دوران هخامنشیان، این خلیج به عنوان یکی از راه‌های
          ارتباطی بین ایران و دیگر کشورهای آسیایی و افریقایی مورد استفاده قرار
          می‌گرفت. همچنین، در دوره‌های بعدی، این منطقه شاهد مبادلات تجاری مهمی
          بوده است که سبب رشد و توسعه‌ی اقتصادی ایران شد.
        </p>

        <p className="text-xl text-gray-700 mb-8">
          در دوران اسلامی نیز خلیج فارس همچنان نقشی حیاتی در ارتباطات تجاری و
          فرهنگی ایران با کشورهای عربی و دیگر نقاط جهان ایفا می‌کرد. شهرهای
          بندری مانند بوشهر، بندرعباس و آبادان در این منطقه به‌عنوان مراکز تجاری
          و صادراتی اهمیت بسیاری داشته‌اند.
        </p>

        <h2 className="text-3xl font-semibold mb-6">جغرافیای خلیج فارس</h2>
        <p className="text-xl text-gray-700 mb-8">
          خلیج فارس به طول 990 کیلومتر و عرض 56 کیلومتر در بین ایران و کشورهای
          شبه جزیره عربستان قرار دارد. این خلیج از شمال با ایران و از جنوب با
          کشورهای عربی مانند عربستان سعودی، قطر، بحرین، و امارات متحده عربی
          هم‌مرز است. در این منطقه، جزایر کوچک و بزرگی مانند کیش، قشم، هرمز و
          بوشهر قرار دارند که از نظر تاریخی و اقتصادی اهمیت زیادی دارند.
        </p>

        <p className="text-xl text-gray-700 mb-8">
          این خلیج یکی از پررنگ‌ترین مسیرهای دریایی جهان است که در آن بیشترین
          میزان حمل و نقل نفتی انجام می‌شود. اهمیت استراتژیک این منطقه باعث شده
          است که کشورهای مختلف همواره توجه ویژه‌ای به این ناحیه داشته باشند.
        </p>

        <h2 className="text-3xl font-semibold mb-6">اهمیت اقتصادی خلیج فارس</h2>
        <p className="text-xl text-gray-700 mb-8">
          خلیج فارس به‌عنوان یکی از بزرگ‌ترین منابع نفت و گاز جهان شناخته
          می‌شود. بسیاری از کشورها برای تأمین انرژی خود به این منطقه وابسته
          هستند. ایران و کشورهای حوزه‌ی خلیج فارس، به ویژه عربستان سعودی،
          امارات، قطر، و کویت، در زمینه‌ی تولید و صادرات نفت و گاز یکی از
          بزرگ‌ترین نقش‌ها را در بازار جهانی انرژی ایفا می‌کنند.
        </p>

        <p className="text-xl text-gray-700 mb-8">
          این منطقه علاوه بر ذخایر عظیم نفت و گاز، دارای صنایع شیمیایی و
          پتروشیمی پیشرفته نیز است که باعث رشد و توسعه‌ی اقتصادی کشورهای حاشیه‌ی
          خلیج فارس شده است. این کشورها از طریق صادرات نفت و گاز خود به بازارهای
          جهانی، در بسیاری از زمینه‌های اقتصادی، از جمله ساخت‌وساز، حمل‌ونقل، و
          صنایع نفتی پیشرفته، سرمایه‌گذاری کرده‌اند.
        </p>

        <h2 className="text-3xl font-semibold mb-6">
          محیط زیست و چالش‌های خلیج فارس
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          علیرغم اهمیت اقتصادی و استراتژیک خلیج فارس، این منطقه با مشکلات محیط
          زیستی متعددی مواجه است. آلودگی‌های نفتی، ریزگردها و تغییرات اقلیمی از
          جمله چالش‌هایی هستند که به شدت به سلامت اکوسیستم این منطقه آسیب
          می‌زنند.
        </p>

        <p className="text-xl text-gray-700 mb-8">
          بسیاری از کشورهای حاشیه‌ی خلیج فارس اقدامات متعددی را برای حفاظت از
          منابع طبیعی و زیست‌محیطی این منطقه انجام داده‌اند. برای مثال، در
          سال‌های اخیر، کشورهای حوزه‌ی خلیج فارس در پروژه‌های بین‌المللی حفاظت
          از محیط زیست مشارکت کرده‌اند و تلاش دارند که با کاهش آلودگی‌ها و حفاظت
          از منابع آبی، محیط زیست خود را حفظ کنند.
        </p>

        <h2 className="text-3xl font-semibold mb-6">
          خلیج فارس در فرهنگ و هنر
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          خلیج فارس از دیرباز منبع الهام برای هنرمندان، شاعران و نویسندگان
          ایرانی بوده است. بسیاری از آثار فرهنگی و هنری ایرانیان، به ویژه در
          حوزه‌ی شعر و موسیقی، به این منطقه و زیبایی‌های طبیعی آن اشاره دارند.
        </p>

        <p className="text-xl text-gray-700 mb-8">
          در ادبیات فارسی، خلیج فارس نماد آزادی، شکوه، و ارتباط با دنیاهای دیگر
          است. شاعران بزرگی مانند حافظ، سعدی و فردوسی در آثار خود به شکوه و
          زیبایی این منطقه اشاره کرده‌اند.
        </p>

        <div className="flex justify-center mt-10">
          <Link href="/" className="text-blue-600 hover:underline">
            بازگشت به صفحه اصلی
          </Link>
        </div>

        <h2 className="text-3xl font-semibold mb-6">نظرات کاربران</h2>
        <div className="mb-8">
          {comments.length === 0 ? (
            <p className="text-gray-700">هنوز هیچ نظری ارسال نشده است.</p>
          ) : (
            <div>
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="p-4 mb-4 border border-gray-300 rounded-lg shadow-md"
                >
                  <p className="text-lg text-gray-800">{comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <h2 className="text-2xl font-semibold mb-4">نظر خود را بنویسید</h2>
        <form onSubmit={handleAddComment} className="flex flex-col">
          <textarea
            className="p-4 mb-4 border border-gray-300 rounded-lg"
            rows={4}
            placeholder="نظر خود را بنویسید..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            type="submit"
            className="self-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            ارسال نظر
          </button>
        </form>

        <div className="flex justify-center mt-10">
          <Link href="/" className="text-blue-600 hover:underline">
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </div>
  );
}
