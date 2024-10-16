<div id="contact" class="relative scroll-margin-top">
    <div class="w-screen py-[20vh] brandGradient min-h-[50vh] flex items-center justify-between">
        <p class="trademark left-text">2024 monke mob <br />All rights reserved</p>
        <div class="social-icons right-text">
            <a href="https://discord.gg/rP9z8HRnSV" class="social-icon"><i class="fa-brands fa-discord"></i></a>
            <a href="https://x.com/monke_mob" class="social-icon"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://www.tiktok.com/@monke.mob" class="social-icon"><i class="fa-brands fa-tiktok"></i></a>
            <a href="https://www.instagram.com/monke.mob" class="social-icon"><i class="fab fa-instagram"></i></a>
            <a href="https://github.com/monke-mob" class="social-icon"><i class="fa-brands fa-github"></i></a>
        </div>
    </div>
</div>

<style>
    .trademark {
        font-size: 1.2rem;
        justify-content: center;
        align-items: center;
        color: #060d15;
        line-height: 1.5;
        padding: 0;
    }

    .brandGradient {
        padding-top: env(safe-area-inset-top);
        padding-bottom: env(safe-area-inset-bottom);
        padding: 20px 40px;
        box-sizing: border-box;
        min-height: 10vh;
        display: flex;
        justify-content: space-between;
    }

    .social-icons {
        display: flex;
        gap: 15px;
        justify-content: center;
        align-items: center;
        margin-left: 0;
    }

    .social-icons a i {
        font-size: 2rem;
        color: #060d15;
        transition: color 0.3s ease;
        margin-left: 0;
    }

    .social-icons a:hover i {
        color: #02080e;
    }

    @media (max-width: 768px) {
        .trademark {
            font-size: 0.8rem;
            line-height: 1.5;
            margin-right: 15px;
        }

        .social-icons {
            margin-left: 0px;
            font-size: 0.8rem;
            gap: 10px;
        }

        .social-icons a i {
            font-size: 1.5rem;
            color: #060d15;
            transition: color 0.3s ease;
            margin-left: 0;
            white-space: nowrap;
        }

        .brandGradient {
            padding: 5px 5%;
            min-height: 10vh;
        }
    }
</style>
