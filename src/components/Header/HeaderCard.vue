<template>
  <div class="main-header flex justify-between items-center text-center p-4 my-1">
    <!-- Nama Halaman (Dashboard) di Sisi Kanan -->
    <div class="text-xl font-semibold">Pengenalan Web</div>
    <div class="flex space-x-4">
      <div class="search flex items-center border border-gray-300 rounded-md">
        <!-- Hanya menampilkan ikon pencarian saat ukuran layar sm -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="md:size-4 size-3 m-2">
          <!-- Menampilkan hanya pada ukuran sm -->
          <path stroke-linecap="round" stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <!-- Input pencarian -->
        <input type="text" placeholder="Search..." class="flex-1 focus:outline-none hidden sm:block bg-gray-50">
      </div>
      <div class="notifications flex items-center">
        <span class="icon text-xl text-gray-700 rounded-full border-2 border-gray-300 hover:border-gray-600 relative">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6 md:size-7 m-1">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
          <span class="absolute h-2 w-2 bg-red-500 rounded-full top-0 right-0"></span>
        </span>
      </div>
      <div class="profile ml-4">
        <img :src="profileImage" alt="Profile"
          class="size-8 md:size-10 rounded-full border-2 border-gray-300 hover:border-gray-600">
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'MainHeader',
  props: ['pageTitle'],
  setup() {
    const profileImage = ref('@/assets/images.png'); // Gambar default

    // Saat komponen dimuat, ambil gambar profil dari localStorage
    onMounted(() => {
      const savedProfileImage = localStorage.getItem('userPhoto');
      if (savedProfileImage) {
        profileImage.value = savedProfileImage;
      }
    });

    return {
      profileImage,
    };
  },
};
</script>


