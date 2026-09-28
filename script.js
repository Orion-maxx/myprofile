document.addEventListener('DOMContentLoaded', () => {
  
  // --- Typewriter Effect ---
  const typedTextSpan = document.getElementById("typed");
  const words = ["Designer", "Developer", "Freelancer", "Photographer"];
  const typingDelay = 100;
  const erasingDelay = 60;
  const newWordDelay = 1500; // Jeda sebelum mulai menghapus```javascript
document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       TYPEWRITER EFFECT
    ===================================================== */

    const typedTextSpan = document.getElementById("typed");

    const words = [
        "Designer",
        "Developer",
        "Freelancer",
        "Photographer"
    ];

    const typingDelay = 100;
    const erasingDelay = 60;
    const newWordDelay = 1500;

    let wordIndex = 0;
    let charIndex = 0;


    function type() {

        if (!typedTextSpan) return;

        if (charIndex < words[wordIndex].length) {

            typedTextSpan.textContent +=
                words[wordIndex].charAt(charIndex);

            charIndex++;

            setTimeout(type, typingDelay);

        } else {

            setTimeout(erase, newWordDelay);

        }
    }


    function erase() {

        if (!typedTextSpan) return;

        if (charIndex > 0) {

            typedTextSpan.textContent =
                words[wordIndex].substring(0, charIndex - 1);

            charIndex--;

            setTimeout(erase, erasingDelay);

        } else {

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

            setTimeout(type, typingDelay + 300);
        }
    }


    /* Mulai Typewriter */

    if (typedTextSpan) {
        setTimeout(type, 500);
    }



    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const mobileToggle =
        document.getElementById("mobileToggle");

    const sidebar =
        document.getElementById("sidebar");


    if (mobileToggle && sidebar) {

        mobileToggle.addEventListener("click", () => {

            sidebar.classList.toggle("sidebar-active");

            updateMobileIcon();

        });


        function updateMobileIcon() {

            const icon =
                mobileToggle.querySelector("i");

            if (!icon) return;


            const isOpen =
                sidebar.classList.contains("sidebar-active");


            /* Update accessibility */

            mobileToggle.setAttribute(
                "aria-expanded",
                isOpen
            );


            /* Update icon */

            if (isOpen) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        }


        /* =================================================
           CLOSE SIDEBAR WHEN CLICKING OUTSIDE
        ================================================= */

        document.addEventListener("click", (event) => {

            const clickedSidebar =
                sidebar.contains(event.target);

            const clickedButton =
                mobileToggle.contains(event.target);


            if (
                window.innerWidth <= 1199 &&
                !clickedSidebar &&
                !clickedButton &&
                sidebar.classList.contains("sidebar-active")
            ) {

                sidebar.classList.remove(
                    "sidebar-active"
                );

                updateMobileIcon();

            }

        });


        /* =================================================
           CLOSE SIDEBAR WHEN PRESSING ESC
        ================================================= */

        document.addEventListener("keydown", (event) => {

            if (
                event.key === "Escape" &&
                sidebar.classList.contains("sidebar-active")
            ) {

                sidebar.classList.remove(
                    "sidebar-active"
                );

                updateMobileIcon();

            }

        });

    }



    /* =====================================================
       NAVIGATION LINKS
    ===================================================== */

    const navLinks =
        document.querySelectorAll(".nav-link");


    navLinks.forEach(link => {

        link.addEventListener("click", function () {

            /* ================================
               ACTIVE MENU
            ================================= */

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            this.classList.add("active");


            /* ================================
               CLOSE SIDEBAR ON MOBILE
            ================================= */

            if (
                window.innerWidth <= 1199 &&
                sidebar &&
                sidebar.classList.contains("sidebar-active")
            ) {

                sidebar.classList.remove(
                    "sidebar-active"
                );


                if (mobileToggle) {

                    const icon =
                        mobileToggle.querySelector("i");


                    if (icon) {

                        icon.classList.remove(
                            "fa-xmark"
                        );

                        icon.classList.add(
                            "fa-bars"
                        );

                    }


                    mobileToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        });

    });



    /* =====================================================
       RESET SIDEBAR WHEN RESIZING
    ===================================================== */

    window.addEventListener("resize", () => {

        /*
         * Jika layar kembali ke desktop,
         * sidebar dikembalikan ke kondisi normal.
         */

        if (
            window.innerWidth > 1199 &&
            sidebar
        ) {

            sidebar.classList.remove(
                "sidebar-active"
            );


            if (mobileToggle) {

                const icon =
                    mobileToggle.querySelector("i");


                if (icon) {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }


                mobileToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    });


});


  let wordIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < words[wordIndex].length) {
      typedTextSpan.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newWordDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      wordIndex++;
      if (wordIndex >= words.length) wordIndex = 0;
      setTimeout(type, typingDelay + 300);
    }
  }

  // Mulai efek mengetik jika elemen ditemukan
  if (typedTextSpan) {
    setTimeout(type, 500);
  }

  // --- Mobile Navigation Toggle ---
  const mobileToggle = document.getElementById('mobileToggle');
  const sidebar = document.getElementById('sidebar');

  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener('click', () => {
      sidebar.classList.toggle('sidebar-active');
      
      // Ubah ikon toggle
      const icon = mobileToggle.querySelector('i');
      if (sidebar.classList.contains('sidebar-active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  }

  // --- Smooth Scroll & Active Menu State ---
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      // Hapus kelas 'active' dari semua link
      navLinks.forEach(item => item.classList.remove('active'));
      
      // Tambahkan kelas 'active' pada link yang diklik
      this.classList.add('active');

      // Tutup sidebar di layar HP setelah diklik
      if (window.innerWidth <= 1199 && sidebar.classList.contains('sidebar-active')) {
        sidebar.classList.remove('sidebar-active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  });

});