<script>
    import Line from "svelte-chartjs/src/Line.svelte";
    import { media } from '../stores/MediaQuery';

    let mobileLabels = ["Januari", "Februari", "Maret"];
    let tabletLabels = ["Januari", "Februari", "Maret", "April", "Mei", "Juni"];
    let desktopLabels = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "July", "Agustus", "September", "Oktober", "November", "Desember"];
    let lapanganMobileData = [40, 50, 70];
    let lapanganTabletData = [40, 50, 70, 50, 40, 85];
    let lapanganDesktopData = [40, 50, 70, 50, 40, 85, 60, 70, 80, 50, 40, 80];
    let snackMobileData = [50, 40, 45];
    let snackTabletData = [50, 40, 45, 50, 30, 50];
    let snackDesktopData = [50, 40, 45, 50, 30, 50, 55, 60, 70, 50, 40, 60];



    $: if ($media.mobile) {
      dataLine.labels = mobileLabels;
      dataLine.datasets[0].data = lapanganMobileData;
      dataLine.datasets[1].data = snackMobileData;
    } else if ($media.tablet) {
      dataLine.labels = tabletLabels;
      dataLine.datasets[0].data = lapanganTabletData;
      dataLine.datasets[1].data = snackTabletData;
    } else if($media.desktop){
      dataLine.labels = desktopLabels;
      dataLine.datasets[0].data = lapanganDesktopData;
      dataLine.datasets[1].data = snackDesktopData;
    };

    let dataLine = {
    labels: mobileLabels,
    datasets: [
      {
        label: "Lapangan",
        fill: false,
        lineTension: 0.3,
        backgroundColor: "#206a5d20",
        borderColor: "#206a5d",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#206a5d",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 6,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: lapanganMobileData
      },
      {
        label: "Snacks",
        fill: false,
        lineTension: 0.3,
        backgroundColor: " #81b21420",
        borderColor: "#81b214",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#81b214",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 6,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220, 1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: snackMobileData
      }
    ]
  };

</script>



<Line data={dataLine} options={{ responsive: true }}  />



