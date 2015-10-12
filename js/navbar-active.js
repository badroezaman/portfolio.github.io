$(function() {
    var path = window.location.href; // Mengambil data URL pada Address bar
    $('#navigasi li a').each(function() {
        // Jika URL pada menu ini sama persis dengan path...
        if (this.href === path) {
            // Tambahkan kelas "active" pada menu ini
            $(this).addClass('active');
        }
    });
});
