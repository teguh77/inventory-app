<script>
    import List from 'svelte-material-icons/FormatListBulletedSquare.svelte';
    import Cash from "svelte-material-icons/CashMultiple.svelte";
    import Magnify from "svelte-material-icons/Magnify.svelte";
    import Download from "svelte-material-icons/Download.svelte";
    import TrashCanOutline from 'svelte-material-icons/TrashCanOutline.svelte';
    import Check from 'svelte-material-icons/CheckboxMarkedCircleOutline.svelte';
    import Question from 'svelte-material-icons/HelpCircleOutline.svelte';
    import Food from 'svelte-material-icons/Food.svelte';
    import Field from 'svelte-material-icons/SoccerField.svelte';
    import Chart from '../components/Chart.svelte';
    import PaginationNav from '../shared/PaginationNav.svelte';
    import {fade} from 'svelte/transition'
    import Flatpickr from "svelte-flatpickr";
    import "flatpickr/dist/flatpickr.css";
    import "flatpickr/dist/themes/material_greendark.css";

    let showRekamanTransaksi = true;
    let showPopup;

    let dates, startDate, endDate;

    const flatpickrOptionsRange = {
        inline: true,
        mode: 'range',
        enableTime: false,
        onChange: (selectedDates, dateStr, instance) => {}
    };

    const flatpickrOptions = {
      onChange: (selectedDates, dateStr, instance) => {}
    };




</script>


<svelte:head>
	<title>Statistik</title>
</svelte:head>
<section>
    <div class="chart-wrapper" in:fade>
        <h1>Rata-rata Pemasukan</h1>
        <Chart/>
    </div>
    <div class="notes" in:fade>
        <h1>Catatan</h1>
        <div class="lapangan">
            <i><Field size={"3rem"}/></i>
            <div class="info">
                <div class="title">Lapangan</div>
                <div class="nominal">200.000</div>
            </div>
        </div>
        <div class="snacks">
            <i><Food size={"3rem"}/></i>
            <div class="info">
                <div class="title">Snacks</div>
                <div class="nominal">100.000</div>
            </div>
        </div>
    </div>
    <div class="record-list" in:fade>
        <div class="header">
            <div class="buttons">
                <i class:active={showRekamanTransaksi} on:click={() => showRekamanTransaksi = !showRekamanTransaksi}><List size={"2rem"}/></i>
                <i class:active={!showRekamanTransaksi} on:click={() => showRekamanTransaksi = !showRekamanTransaksi}><Cash size={"2rem"}/></i>
            </div>
        </div>
        {#if showRekamanTransaksi}
        <div class="body" in:fade>
            <div class="body-top">
                <div class="title-wrapper">
                    <h1>Rekaman Transaksi</h1>
                </div>
                <div class="filter">
                    <div class="left">
                        <div>
                            <label for="start">Start</label>
                            <Flatpickr options="{ flatpickrOptions }" bind:value={startDate} element="#start">
                                <div id="start">
                                    <input type="text" placeholder="Pilih Tanggal" data-input>
                                </div>
                            </Flatpickr>
                        </div>

                        <div>
                            <label for="end">End</label>
                            <Flatpickr options="{ flatpickrOptions }" bind:value={endDate} element="#end">
                                <div id="end">
                                    <input type="text" placeholder="Pilih Tanggal" data-input>
                                </div>
                            </Flatpickr>
                        </div>
                    </div>
                    <div class="right">
                        <div class="search">
                            <input type="text" placeholder="Cari">
                            <i class="magnify"><Magnify size={"2rem"}/></i>
                        </div>
                        <div class="download">
                            <span>Download</span>
                            <i><Download size={"2rem"}/></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="body-main">
                <table>
                    <tr>
                        <th class="tanggal">Tanggal</th>
                        <th class="hari">Hari</th>
                        <th class="nama">Nama</th>
                        <th class="harga">Harga Satuan</th>
                        <th class="jumlah">Jumlah</th>
                        <th class="total">Total Harga</th>
                        <th class="edit">Edit</th>
                    </tr>
                    <tr>
                        <td class="tanggal">07/09/20</td>
                        <td class="hari">Senin</td>
                        <td class="nama">Aqua Besar</td>
                        <td class="harga">5.000</td>
                        <td class="jumlah">3</td>
                        <td class="total">15.000</td>
                        <td class="edit">
                            <i class="trash" on:click ={() => showPopup = true}>
                               <TrashCanOutline size={"2rem"}/>
                            </i>
                        </td>
                    </tr>
                    <tr>
                        <td class="tanggal">07/09/20</td>
                        <td class="hari">Senin</td>
                        <td class="nama">Aqua Besar</td>
                        <td class="harga">5.000</td>
                        <td class="jumlah">3</td>
                        <td class="total">15.000</td>
                        <td class="edit">
                            <i class="trash" on:click ={() => showPopup = true}>
                               <TrashCanOutline size={"2rem"}/>
                            </i>
                        </td>
                    </tr>
                    <tr>
                        <td class="tanggal">07/09/20</td>
                        <td class="hari">Senin</td>
                        <td class="nama">Aqua Besar</td>
                        <td class="harga">5.000</td>
                        <td class="jumlah">3</td>
                        <td class="total">15.000</td>
                        <td class="edit">
                            <i class="trash" on:click ={() => showPopup = true}>
                               <TrashCanOutline size={"2rem"}/>
                            </i>
                        </td>
                    </tr>
                    <tr>
                        <td class="tanggal">07/09/20</td>
                        <td class="hari">Senin</td>
                        <td class="nama">Aqua Besar</td>
                        <td class="harga">5.000</td>
                        <td class="jumlah">3</td>
                        <td class="total">15.000</td>
                        <td class="edit">
                            <i class="trash" on:click ={() => showPopup = true}>
                               <TrashCanOutline size={"2rem"}/>
                            </i>
                        </td>
                    </tr>
                    <tr>
                        <td class="tanggal">07/09/20</td>
                        <td class="hari">Senin</td>
                        <td class="nama">Aqua Besar</td>
                        <td class="harga">5.000</td>
                        <td class="jumlah">3</td>
                        <td class="total">15.000</td>
                        <td class="edit">
                            <i class="trash" on:click ={() => showPopup = true}>
                               <TrashCanOutline size={"2rem"}/>
                            </i>
                        </td>
                    </tr>
                </table>
            </div>
            <PaginationNav/>
        </div>
        {:else}
        <div class="body" in:fade>
            <div class="body-top">
                <div class="title-wrapper">
                    <h1>Target dan Realisasi</h1>
                </div>
            </div>
            <div class="body-main">
                <table>
                    <tr>
                        <th class="nama">Nama</th>
                        <th class="target">Target</th>
                        <th class="realisasi">Realisasi</th>
                        <th class="status">Status</th>
                    </tr>
                    <tr>
                        <td class="nama">Aqua Besar</td>
                        <td class="target">100.000</td>
                        <td class="realisasi">100.000</td>
                        <td class="status">
                            <i class="check"><Check size={"2.5rem"}/></i>
                        </td>
                    </tr>
                    <tr>
                        <td class="nama">Aqua Besar</td>
                        <td class="target">100.000</td>
                        <td class="realisasi">90.000</td>
                        <td class="status">
                            <i class="question"><Question size={"2.5rem"}/></i>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        {/if}
    </div>

    <div class="date" in:fade>
            <Flatpickr
                options={flatpickrOptionsRange}
                dateFormat="Y-m-d"
                bind:value={dates}
                element="#picker"
                >
                <div class="flatpickr" id="picker">
                    <input type="text" placeholder="Rentang Waktu" data-input>
                </div>
            </Flatpickr>
    </div>
    {#if showPopup}
    <div class="popup" transition:fade>
    <div class="container">
        <h1>Yakin untuk menghapus data ini ?</h1>
        <div class="buttons">
            <button class="hapus">Hapus</button>
            <button class="cancel" on:click={() => showPopup = false}>Cancel</button>
        </div>
    </div>
    </div>
    {/if}
</section>


<style lang="scss">
    @import "../styles/theme.scss";
    @import "../styles/mixins.scss";

    section {
        padding: 0 3rem 3rem 3rem;
        width: 100%;

        .chart-wrapper {
            width: 100%;
            background-color: white;
            border-radius: 10px;
            padding: 2.5rem;

            h1 {
                font-size: 1.5rem;
                font-family: "Poppins Bold";
                margin-bottom: 2rem;
            }
        }

        .record-list {
            margin: 3rem 0rem;

            .header {
                background-color: $green-dark;
                padding: 2.5rem 0rem;
                border-radius: 10px 10px 0 0 ;

            .buttons {
                @include btnGroup;
                box-shadow: none;
                    i.active {
                        box-shadow: none;
                    }
                }
            }

            .body {
                background-color: white;
                height: auto;
                border-radius: 0 0 10px 10px;
                margin-bottom: 8rem;
                padding: 2.5rem;
                user-select: none;

                .body-top {

                    .title-wrapper {
                        width: 100%;

                        display: flex;
                        justify-content: center;
                        align-items: center;

                        h1 {
                        font-size: 1.5rem;
                        font-family: "Poppins Bold";
                        margin-bottom: 1rem;
                        }
                    }

                        .filter {
                        display: grid;
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        max-width: 100%;
                        column-gap: 2.5rem !important;


                        label, input {
                            width: 100%;
                        }

                        label {
                            font-size: 1.2rem;
                        }

                        input {
                            height: 4rem;
                            padding: 1rem;
                            font-size: 1.2rem;
                            border: none;
                            background-color: $fade;
                            border-radius: 20px;

                            &:focus {
                                outline: none;
                                border-bottom: 1px solid $green;
                            }
                        }


                        .left, .right {
                            display: grid;
                            grid-template-columns: auto;
                            row-gap: 1rem;
                            max-width: 100%;
                        }



                        .right {
                            padding-top: 1.8rem;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;

                            .search {
                                position: relative;

                                i.magnify {
                                position: absolute;
                                top: 1rem;
                                right: .7rem;
                                cursor: pointer;
                                }
                            }



                            .download {
                                background-color: $green;
                                height: 4rem;
                                border-radius: 10px;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                cursor: pointer;
                                transition: .2s;
                                color: white;
                                font-size: 1.4rem;
                                padding: 2rem;

                                i {
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                }

                                &:hover {
                                    opacity: .8;
                                    transform: scale(1.05);
                                }
                            }
                        }
                    }
                }

                .body-main {
                    margin-top: 2.5rem;

                table {
                    width: 100%;
                    text-align: center;
                    border-collapse: collapse;
                    font-size: 1.3rem;

                    & tr:first-child {
                        background-color: $green-dark;
                    }

                    & tr:not(:first-child):nth-child(odd) {
                        background-color: $fade;
                    }


                    th {
                        padding: 2rem 1rem;
                        color: white;
                        letter-spacing: 1.5px;
                        &.harga, &.hari, &.jumlah {
                            display: none;
                        }
                    }

                    td {
                        padding: 2rem 1rem;
                        &.harga, &.hari, &.jumlah {
                            display: none;
                        }

                        &.jumlah {
                            color: $green;
                        }

                        &.edit {
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            .trash {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                padding: .5rem;
                                border-radius: 5px;
                                background-color: $primary-red;
                                cursor: pointer;
                                color: white;
                            }
                        }

                        & {
                            i.check {
                                color: $green;
                            }

                            i.question {
                                color: $primary-red;
                            }
                        }
                    }
                }
            }

            }
        }

        .notes, .date {
            display: none;
        }

            .popup {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0,0,0,0.8);
            z-index: 100;

            .container {
                background-color: white;
                padding: 3rem;
                display: grid;
                grid-template-columns: auto;
                row-gap: 3rem;
                justify-content: center;
                align-items: center;
                border-radius: 10px;

                h1 {
                    font-size: 1.6rem;
                }

                .buttons {
                display: flex;
                justify-content: space-between;
                align-items: center;
                    button {
                        border: none;
                        color: white;
                        font-size: 1.4rem;
                        background-color: $green-dark;
                        width: 10rem;
                        height: 4rem;
                        border-radius: 20px;
                        padding: 0.5rem auto;
                        cursor: pointer;
                        transition: 0.2s;

                        &.hapus {
                          width: 13rem;
                          background-color: $green;
                        }

                        &:hover {
                          opacity: 0.8;
                          transform: scale(1.05);
                        }
                    }

                }
            }
    }
    }

    @media screen and(min-width: 768px) {
        section {
            background-color: $fade;
            border-radius: 35px 0 0 35px;
            padding: 3rem 5rem;

            .record-list {
                margin-bottom: 0;

                .body {
                    margin-bottom: 0;
                    .body-top {
                        .filter {
                            column-gap: 4rem;
                            padding: 0 4rem;
                        }
                    }
                }
            }
        }
    }

    @media screen and(min-width: 868px) {
        section {
            padding: 3rem 8rem;
        }
    }

    @media screen and(min-width: 1024px) {
        section {
            display: grid;
            grid-template-columns: auto 307.875px;
            column-gap: 3rem;
            padding: 3rem 3.4rem;

            .notes, .date {
                display: block;
            }

            .notes {
                background-color: white;
                padding: 3rem;
                border-radius: 10px;
                height: fit-content;

                h1 {
                font-size: 1.5rem;
                font-family: "Poppins Bold";
                margin-bottom: 2rem;
                }


                .lapangan, .snacks {
                    display: flex;
                    align-items: center;
                    padding: 2.5rem;
                    border-radius: 10px;
                    max-width: 307.875px;

                    i {
                        padding: 1.5rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: white;
                        border-radius: 10px;
                        margin-right: 2rem;
                    }

                    .info {
                        display: grid;
                        grid-template-columns: auto;
                        row-gap: 1rem;
                        font-weight: bold;

                        .title {
                            font-family: "Poppins Bold";
                            font-size: 2rem;
                        }

                        .nominal {
                            font-size: 1.5rem;
                        }
                    }
                }
                .lapangan {
                    background-color: #206a5d20;
                    margin-bottom: 3rem;
                    color: #206a5d;
                }
                .snacks {
                    background-color: #81b21420;
                    color:  #81b214;
                }
            }

            .record-list {
                .body {
                    .body-top {
                        .filter {
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            .left {
                                display: none;
                            }

                            .right {
                                width: 100%;
                                display: grid;
                                grid-template-columns: 2fr 1fr;
                                column-gap: 6rem;
                                row-gap: 0;
                                margin-left: 0;
                                input {
                                    padding: 0 2rem;
                                    font-size: 1.3rem;
                                }
                            }
                        }
                    }
                }
            }

            .date {
                margin-top: 3rem;
                .flatpickr {
                    input {
                        border: none;
                        height: 5rem;
                        width: 100%;
                        border-radius: 10px;
                        text-align: center;
                        background-color: $green-dark;
                        color: white;
                        font-size: 1.4rem;
                        padding: 0 3rem;
                        max-width: 307.875px;

                        &::placeholder {
                            color: white;
                            font-size: 1.4rem;
                        }
                    }
                }
            }
        }
    }

    @media screen and(min-width: 1280px) {
        section {
            padding: 4rem 6rem;
            .notes {
                .lapangan, .snacks {
                    height: 15rem;
                    padding: 5rem 3rem;
                }
            }
            .record-list {
                .body {
                    .body-top {
                        .filter {
                            padding: 0 6rem;

                            .right {
                                .search {
                                    i.magnify {
                                        right: 1.4rem;
                                    }
                                }
                            }
                        }
                    }
                    .body-main {
                        table {
                            th, td {
                                &.harga, &.hari, &.jumlah {
                                    display: table-cell;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>