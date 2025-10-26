<template>
<div class="grid lg:grid-cols-2 items-start gap-16 p-6 mx-auto max-w-5xl max-lg:max-w-2xl bg-white">
      <div>
        <h2 class="text-slate-900 text-3xl font-bold">Contact</h2>
        <p class="text-[15px] text-slate-600 mt-4 leading-relaxed">Vous recherchez un alternant pour vos projets de développement Web, contactez moi !</p>
        <div class="mt-12">
          <h2 class="text-slate-900 text-base font-semibold">Mail</h2>
          <ul class="mt-4">
            <li class="flex items-center">
              <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#000'
                  viewBox="0 0 479.058 479.058">
                  <path
                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                    data-original="#000000" />
                </svg>
              </div>
              <a href="javascript:void(0)" class="text-sm ml-4">
                <small class="block text-slate-900">Mail</small>
                <spane class="font-semibold text-black-600">benjamin.cahn@epitech.eu</spane>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <form class="lg:ml-auto space-y-4">
        <input type='text' v-model = "name"  placeholder='name'
          class="w-full rounded-md py-3 px-4 bg-slate-100 text-slate-900 text-sm border border-gray-200 focus:border-slate-900 outline-none focus:bg-transparent" />
        <input type='email' v-model = "email" placeholder='email'
          class="w-full rounded-md py-3 px-4 bg-slate-100 text-slate-900 text-sm border border-gray-200 focus:border-slate-900 outline-none focus:bg-transparent" />
        <input type='text' v-model = "subject"  placeholder='subject'
          class="w-full rounded-md py-3 px-4 bg-slate-100 text-slate-900 text-sm border border-gray-200 focus:border-slate-900 outline-none focus:bg-transparent" />
        <textarea v-model = "message" placeholder='message' rows="6"
          class="w-full rounded-md px-4 bg-slate-100 text-slate-900 text-sm pt-3 border border-gray-200 focus:border-slate-900 outline-none focus:bg-transparent"></textarea>
        <button type="submit" @click.prevent = "send"
          class="text-white bg-slate-900 hover:bg-slate-800 tracking-wide rounded-md text-sm font-medium px-4 py-3 w-full cursor-pointer !mt-2 border-0">Envoyer</button>
      </form>
    </div>
</template>
<script setup>
const mail = useMail()

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

const send = async () => {
  await mail.send ({
    from : email.value, 
    subject: subject.value, 
    text: message.value
  })
}


</script>