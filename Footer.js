export function Footer() {
	return `
    <div class="flex items-center justify-center min-h-screen bg-gray-100 w-full ">
      <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-lg ">
        <h2 class="text-2xl font-bold mb-6 text-right">تماس با ما</h2>

        <form class="space-y-2">
          <input
            type="text"
            placeholder="نام شما"
            class="w-full border border-gray-300 rounded-md p-3 text-right focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />

          <input
            type="email"
            placeholder="ایمیل شما"
            class="w-full border border-gray-300 rounded-md p-3 text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="پیام شما"
            rows="4"
            class="w-full border border-gray-300 rounded-md p-3 text-right resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <div class="flex justify-end">
            <button
              type="submit"
              class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}
