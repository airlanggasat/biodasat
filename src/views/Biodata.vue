<template>
    <div class="biodata">
        <h1>Curriculum Vitae</h1>
        <img :src="require('@/assets/logo.png')" alt="Foto Profil" class="foto" />
        <ul>
            <li><strong>Nama:</strong> Airlangga Satriagung</li>
            <li><strong>Tempat, Tanggal Lahir:</strong> Kediri, 27 Desember 2003</li>
            <li><strong>Alamat:</strong> Jl. Asparaga no 6 Malang</li>
            <li><strong>Email:</strong> satriagungairlangga@gmail.com</li>
            <li><strong>No. HP:</strong> 085745715220</li>
            <li><strong>Pendidikan:</strong> S1 Sistem Informasi, Universitas Brawijaya</li>
            <li><strong>Makanan Favorit:</strong> Gacoan, Damara </li>

        </ul>
    </div>
</template>

<script>
export default {
    name: 'BiodataView' 
}
</script>


<script>
export default {
  name: 'BiodataView' 
}
</script>


<style scoped>
.biodata {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.foto {
    width: 150px;
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
}
</style>
