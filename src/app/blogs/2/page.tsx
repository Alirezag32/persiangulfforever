"use client";
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
          پیدایش و تاریخ خلیج فارس
        </h1>

        {/* <p className="text-xl text-gray-700 mb-8">
          خلیج فارس، یکی از مهم‌ترین و شناخته‌شده‌ترین مناطق دریایی جهان است که
          در جنوب غربی آسیا و بین ایران و شبه جزیره عربستان قرار دارد. این خلیج
          با ویژگی‌های طبیعی و تاریخی منحصر به فرد خود، در طول تاریخ نقشی بسیار
          حیاتی در ارتباطات دریایی، تجارت، و امنیت جهانی ایفا کرده است.
        </p> */}

        <div className="relative mb-12">
          <Image
            src="/14.jpg"
            alt="Persian Gulf"
            className="lg:w-[20%] w-[70%] h-auto rounded-lg shadow-lg "
            width={2000}
            height={2000}
          />
          {/* <div className="absolute bottom-4 left-4 text-white bg-opacity-60 bg-black p-2 rounded-lg">
            <p className="text-lg">تصویری از خلیج فارس</p>
          </div> */}
        </div>

        <h2 className="text-3xl font-semibold mb-6">پیدایش خلیج فارس</h2>
        <p className="text-xl text-gray-700 mb-8">
          زمین‌شناسان معتقدند که در حدود پانصد هزار سال پیش، صورت نخستین خلیج
          فارس در کنار دشت‌های جنوبی ایران تشکیل شد و به مرور زمان، بر اثر تغییر
          در ساختار درونی و بیرونی زمین، شکل ثابت کنونی خود را یافت. خلیج فارس
          در آغاز، بسیار پهناور بوده به‌طوری‌که تا اواخر دوره سوم زمین‌شناسی،
          بیشتر جلگه‌های برازجان، بهبهان و خوزستان ایران تا کوه‌های زاگرس در زیر
          آب بوده‌اند.
        </p>

        <p className="text-xl text-gray-700 mb-8">
          از آخرین تغییرات خلیج فارس، این بوده که این خلیج، طی دوران آخرین عصر
          یخبندان (حدود ۷۰ تا ۱۱ هزار سال پیش) که آب‌وهوای زمین، سردتر بوده و
          یخسارهای قطبی و یخچال‌های کوهستانی، گسترش یافته‌اند و در نتیجه،
          به‌دلیل جذب آب اقیانوس‌ها به یخسارهای قطبی و گسترش آن‌ها، آب
          اقیانوس‌ها و دریاها طی این دوران، پایین رفته است (به‌طور میانگین ۱۲۰
          متر).[۹] در این مدت، جایی که امروزه با نام خلیج فارس می‌شناسیم، وجود
          نداشته و به‌صورت گودالی بسیار بزرگ بوده که رودخانهٔ پهناور اروندرود به
          آن می‌ریخته و در عمیق‌ترین بخش‌های آن، دریاچهها و برکه‌هایی وجود
          داشته‌اند؛[۱۰] برخی بررسی‌ها نشان می‌دهد که احتمالاً تمدنی در آن مناطق
          شکل گرفته، که با ورود و بالا آمدن سطح آب در خلیج فارس، بقایای آن به
          زیر آب رفته است.
        </p>

        <p className="text-xl text-gray-700 mb-8">
          پس از پایان آخرین عصر یخبندان در حدود ۱۱ هزار سال پیش، و ذوب‌شدن یخهای
          قطبی و بالا آمدن آب اقیانوس‌ها و دریاهای آزاد، سطح دریای عمان نیز بالا
          آمده و از طریق تنگهٔ هرمز، آب به درون گودال بسیار بزرگی که امروزه با
          نام خلیج فارس می‌شناسیم، جاری شده و به‌تدریج، به شکلی که امروز
          می‌بینیم درآمده است. گمانه‌زنی‌هایی وجود دارد که پس از خروج انسان
          خردمند از آفریقا در حدود ۷۰ هزار سال پیش، بستر خلیج فارس محل شکل‌گیری
          تمدن یا تمدن‌هایی بوده که پس از پایان عصر یخبندان، آثار آن به زیر آب
          رفته است.
        </p>

        <h2 className="text-3xl font-semibold mb-6">تاریخ</h2>
        <p className="text-xl text-gray-700 mb-8">
          خلیج فارس قرن‌ها مرکز حیاتی تجارت و حمل و نقل بوده است. تاریخ خلیج
          فارس را می‌توان به دوران باستان با شواهدی از سکونت‌گاه‌های اولیه
          انسان‌ها در حدود ۵۰۰۰ سال قبل از میلاد ردیابی کرد. در طول تاریخ، خلیج
          فارس خانه بسیاری از امپراتوری‌ها و تمدن‌ها از جمله سومری‌ها، اکدی‌ها،
          بابلی‌ها، ایرانی‌ها، یونانی‌ها و اعراب بوده است. این تمدن‌ها برای
          کنترل خلیج فارس جنگیده‌اند و محل درگیری‌های متعددی از جمله جنگ ایران و
          عراق از سال ۱۹۸۰ تا ۱۹۸۸ بوده است.
        </p>

        <p className="text-xl text-gray-700 mb-8">
          قرن هفتم، خلافت اسلامی بر منطقه خلیج فارس تسلط یافت و به مرکز مهم
          تجارت و بازرگانی تبدیل شد. خلیج فارس در طول قرن نوزدهم با افزایش
          صادرات نفت شاهد افزایش قابل توجهی در تجارت بود و تا به امروز یکی از
          صادرکنندگان اصلی نفت است.
        </p>

        <div className="w-[80%]">
          <h4 className="text-2xl">منابع :</h4>
          <p className="text-xs sm:text-base text-gray-700 mb-8">
            https://sites.google.com/site/saintmtraveler/persian-gulf-flood-and-the-garden-of-eden
          </p>
          <p className="text-xs sm:text-base text-gray-700 mb-8">
            http://www.persiangulfstudies.com/fa/pages/75 مرکز مطالعات خلیج فارس
          </p>
          <p className="text-xs sm:text-base text-gray-700 mb-8">ویکی پدیا</p>
        </div>

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
