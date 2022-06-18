<style>
@import'..\assets\dashboard.css';

#table_header{
    display: inline-flex;
    width:33.3%;
    height: 10%;
    background-color: rgba(0, 0, 0, 0.5); 

    justify-content: center;
    align-items: center;
}

</style>

<template>

<div class="header">

    <!-- company logo -->
    <div class="company_space">

        <div id="header_logo">
            <img src="https://via.placeholder.com/100" alt="">
        </div>

        <div id="company_name">
            <p>Bebas</p>
        </div>
    </div>
    

    
    
    <!-- user profile -->
        <div class="user_profile">
        <div id="user_pfp">

        </div>
        <div id="user_name">
            <p>My Full Name</p>
            <p>My Batch Info</p>
        </div>
    
    </div>
    
</div>
<!-- navbar -->
<div class="navigation">
        <RouterLink to="/login" class="nav_button"> Tugas</RouterLink>
        <RouterLink to="/login" class="nav_button"> Jadwal</RouterLink>
        <RouterLink to="/login" class="nav_button"> Profil</RouterLink>
        <RouterLink to="/login" class="nav_button"> Administrasi</RouterLink>
        <RouterLink to="/login" class="nav_button"> Log Out</RouterLink>
 
</div>

<!-- content -->
<div style="display: inline-flex; justify-content: space-around;">
    <!-- sidebar -->
        <span class="sidebar">
            <div id="sidebar_button">
                Session
            </div>
            <div id="sidebar_button">
                Absensi
            </div>
            <div id="sidebar_button">
                Ujian
            </div>
        </span>
        <span class="main_window">
            <div id="table_header" style="border-top-left-radius: 25px;">
                Hari, Tanggal
            </div>
            <div id="table_header">
                Jam
            </div>
            <div id="table_header" style="border-top-right-radius: 25px;">
                Materi
            </div>
        </span>
</div>

</template>

<script>

</script>