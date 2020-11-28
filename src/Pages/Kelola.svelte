<script>
    import Field from 'svelte-material-icons/SoccerField.svelte';
    import FolderPlus from 'svelte-material-icons/FolderPlus.svelte';
    import Edit from 'svelte-material-icons/FileEdit.svelte'
    import TrashCanOutline from 'svelte-material-icons/TrashCanOutline.svelte';
    import PaginationNav from '../shared/PaginationNav.svelte';
    import {fade} from 'svelte/transition';


    let hideProductForm = true;
    let hideLapanganForm = true;
    let showEditForm = false;
    let showPopup;

    const productControl = () => {
        hideLapanganForm = true;
        hideProductForm = !hideProductForm;
    }

    const lapanganControl = () => {
        hideProductForm = true;
        hideLapanganForm = !hideLapanganForm;
    }
</script>

<svelte:head>
	<title>Kelola</title>
</svelte:head>

<section>
    <div class="buttons">
          <i class:active={!hideProductForm} on:click={productControl}><FolderPlus size={"2rem"}/></i>
          <i class:active={!hideLapanganForm} on:click={lapanganControl}><Field size={"2rem"}/></i>
    </div>
    <div class="tambah-produk" class:hidden={hideProductForm} in:fade>
        <h1>Tambah Produk</h1>
        <form>
            <div>
                <label for="nama-produk">Nama Produk</label>
                <input type="text" placeholder="Vit Besar" id="nama-produk">
            </div>
            <div>
                <label for="jumlah barang">Jumlah Barang</label>
                <input type="number" placeholder="25" id="jumlah barang">
            </div>
            <div>
                <label for="harga beli">Harga Beli Keseluruhan</label>
                <input type="number" placeholder="100.000" id="harga beli">
            </div>
            <div>
                <label for="harga jual">Harga Jual Satuan</label>
                <input type="number" placeholder="5.000" id="harga jual">
            </div>
            <div class="form-buttons">
                <button  class="submit" type="submit">Tambahkan</button>
                <button class="cancel" type="button" on:click={() => hideProductForm = true}>Cancel</button>
                <button class="reset" type="reset" >Reset</button>
            </div>
        </form>
    </div>
    <div class="edit-lapangan" class:hidden={hideLapanganForm} in:fade>
        <h1>Edit Lapangan</h1>
        <form>
            <div>
                <label for="harga sewa">Harga Sewa Lapangan per-jam</label>
                <input type="number" placeholder="30.000" id="harga sewa">
            </div>
            <div class="form-buttons">
                <button type="submit" class="submit">Simpan</button>
                <button class="cancel" type="button" on:click={() => hideLapanganForm = true}>Cancel</button>
                <button class="reset" type="reset">Reset</button>
            </div>
        </form>
    </div>
    <div class="list-produk" in:fade>
       <h1>Daftar Produk</h1>
        <table>
            <tr>
                <th class="nama">Nama</th>
                <th class="harga">Harga Jual</th>
                <th class="total">Total</th>
                <th class="terjual">Terjual</th>
                <th class="sisa">Sisa</th>
                <th class="edit">Edit</th>
            </tr>
            <tr>
                <td class="nama">Aqua Besar</td>
                <td class="harga">5.000</td>
                <td class="total">30</td>
                <td class="terjual">10</td>
                <td class="sisa">20</td>
                <td class="edit">
                    <i class="edit" on:click={() => showEditForm = true}>
                       <Edit size={"2rem"}/>
                    </i>
                    <i class="trash" on:click={() => showPopup = true}>
                       <TrashCanOutline size={"2rem"}/>
                    </i>
                </td>
            </tr>
            <tr>
                <td class="nama">Aqua Besar</td>
                <td class="harga">5.000</td>
                <td class="total">30</td>
                <td class="terjual">10</td>
                <td class="sisa">20</td>
                <td class="edit">
                    <i class="edit" on:click={() => showEditForm = true}>
                       <Edit size={"2rem"}/>
                    </i>
                    <i class="trash" on:click={() => showPopup = true}>
                       <TrashCanOutline size={"2rem"}/>
                    </i>
                </td>
            </tr>
            <tr>
                <td class="nama">Aqua Besar</td>
                <td class="harga">5.000</td>
                <td class="total">30</td>
                <td class="terjual">10</td>
                <td class="sisa">20</td>
                <td class="edit">
                    <i class="edit" on:click={() => showEditForm = true}>
                       <Edit size={"2rem"}/>
                    </i>
                    <i class="trash" on:click={() => showPopup = true}>
                       <TrashCanOutline size={"2rem"}/>
                    </i>
                </td>
            </tr>
            <tr>
                <td class="nama">Aqua Besar</td>
                <td class="harga">5.000</td>
                <td class="total">30</td>
                <td class="terjual">10</td>
                <td class="sisa">20</td>
                <td class="edit">
                    <i class="edit" on:click={() => showEditForm = true}>
                       <Edit size={"2rem"}/>
                    </i>
                    <i class="trash" on:click={() => showPopup = true}>
                       <TrashCanOutline size={"2rem"}/>
                    </i>
                </td>
            </tr>
            <tr>
                <td class="nama">Aqua Besar</td>
                <td class="harga">5.000</td>
                <td class="total">30</td>
                <td class="terjual">10</td>
                <td class="sisa">20</td>
                <td class="edit">
                    <i class="edit" on:click={() => showEditForm = true}>
                       <Edit size={"2rem"}/>
                    </i>
                    <i class="trash" on:click={() => showPopup = true}>
                       <TrashCanOutline size={"2rem"}/>
                    </i>
                </td>
            </tr>
            <tr>
                <td class="nama">Aqua Besar</td>
                <td class="harga">5.000</td>
                <td class="total">30</td>
                <td class="terjual">10</td>
                <td class="sisa">20</td>
                <td class="edit">
                    <i class="edit" on:click={() => showEditForm = true}>
                       <Edit size={"2rem"}/>
                    </i>
                    <i class="trash" on:click={() => showPopup = true}>
                       <TrashCanOutline size={"2rem"}/>
                    </i>
                </td>
            </tr>
        </table>
        <PaginationNav/>
    </div>
    {#if showEditForm}
    <div class="edit-form-wrapper" in:fade>
        <div class="edit-produk">
        <h1>Edit Produk</h1>
        <form>
            <div>
                <label for="nama-produk">Nama Produk</label>
                <input type="text"  id="nama-produk">
            </div>
            <div>
                <label for="jumlah barang">Jumlah Barang</label>
                <input type="number" id="jumlah barang">
            </div>
            <div>
                <label for="harga beli">Harga Beli Keseluruhan</label>
                <input type="number"  id="harga beli">
            </div>
            <div>
                <label for="harga jual">Harga Jual Satuan</label>
                <input type="number"  id="harga jual">
            </div>
            <div class="form-buttons">
                <button type="submit" class="submit">Simpan</button>
                <button class="cancel" type="button" on:click={() => showEditForm = false}>Cancel</button>
            </div>
        </form>
    </div>
    </div>
    {/if}
    {#if showPopup}
    <div class="popup" transition:fade>
    <div class="container">
        <h1>Yakin untuk menghapus data ini ?</h1>
        <div class="my-buttons">
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

                .my-buttons {
                display: flex;
                width: 100%;
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

        .buttons {
            @include btnGroup;
            margin-bottom: 2.5rem;
        }

        .tambah-produk, .edit-lapangan {
            @include amazingForm;

            .form-buttons {
                .reset {
                    display: none;
                }
            }
        }

        .edit-form-wrapper {
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

            .edit-produk {
                margin: 2.5rem 0 8rem;
        padding: 2.5rem;
        background-color: white;
        border-radius: 10px;

        h1 {
          font-size: 1.5rem;
          font-family: 'Poppins Bold';
        }

        form {
          margin-top: 2rem;
          display: grid;
          row-gap: 2rem;

          font-size: 1.4rem;

          label,
          input {
            width: 100%;
          }

          label {
            font-size: 1.2rem;
          }

          input {
            height: 4rem;
            background-color: $fade;
            outline: none;
            border: none;
            border-radius: 20px;
            padding: 1rem 2rem;

            &:focus {
              border-bottom: 1px solid $green;
            }
          }

          .form-buttons {
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

            &.submit {
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
            width: 35rem;


            }
        }


        /*******List Product*/

        .list-produk {
        width: 100%;
        background-color: white;
        border-radius: 10px;
        padding: 2rem;
        margin-bottom: 8rem;

         h1 {
            margin-bottom: 1rem;
            font-size: 1.5rem;
            font-family: "Poppins Bold";
        }

        table {
            width: 100%;
            text-align: center;
            border-collapse: collapse;
            font-size: 1.3em;

            & tr:first-child {
                background-color: $green-dark;
                font-size: 1.35rem;
            }

            & tr:not(:first-child):nth-child(odd) {
                background-color: $fade;
            }


            th {
                padding: 2rem 1rem;
                color: white;
                letter-spacing: 1.5px;
                &.harga, &.total {
                    display: none;
                }
            }

            td {
                padding: 2rem 1rem;
                &.harga, &.total {
                    display: none;
                }

                &.terjual {
                    color: $green;
                }

                &.sisa {
                    color: $green;
                }

                &.edit {
                    display: flex;
                    justify-content: center;
                    align-items: center;


                    .edit {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: .5rem;
                        background-color: $green;
                        border-radius: 5px 0 0 5px;
                        cursor: pointer;
                        color: white;
                    }

                    .trash {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: .5rem;
                        border-radius: 0 5px 5px 0;
                        background-color: $primary-red;
                        cursor: pointer;
                        color: white;
                    }
                }
            }
        }
    }


    }

    @media screen and(min-width: 768px) {
        section {
            padding-top: 3rem ;
            background-color: $fade;
            border-radius: 50px 0 0 50px;
            display: grid;
            grid-template-columns: repeat(4, minmax(0, auto));
            grid-template-rows: auto auto;
            column-gap: 3rem;

            .tambah-produk {
                grid-column: 1/3;
                grid-row: 1/2;

                margin-bottom: 3rem;

                &.hidden {
                    padding: 2.5rem;
                    margin-bottom: 2.5rem;
                    height: auto;
                }

                form {
                    .form-buttons {

                    button {

                        &.cancel {
                            display: none;
                        }

                        &.reset {
                            display: block;
                        }

                    }
                }

                }
                }






            .edit-lapangan {
                grid-column: 3/5;
                grid-row: 1/2;
                max-height: 21.5rem;

                margin-bottom: 3rem;

                form {
                    .form-buttons {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    button {
                        margin-right: 0;

                        &.cancel {
                            display: none;
                        }
                        &.reset {
                            display: block;
                        }
                    }
                }
                }

                &.hidden {
                    height: auto;
                    padding: 2.5rem;
                    margin-bottom: 2.5rem;
                }


            }

            .list-produk {
                grid-column: 1/5;
                grid-row: 2/3;
                margin-bottom: 0rem;

            }

            .buttons {
                display: none;
            }
        }
    }

    @media screen and(min-width: 1024px) {
        section {
            grid-template-columns: auto auto auto;
            grid-template-rows: unset;
            padding: 3rem 4rem;
            row-gap: 3rem;

            .list-produk {
                grid-column: 2/4;
                grid-row: 1/auto;
                min-width: 50rem;
                margin-bottom: 3rem;

                table {

                    th, td {
                        &.harga, &.total {
                            display: table-cell;
                        }
                    }
                }
            }

            .tambah-produk {
                grid-column: 1/2;
                grid-row: 1/2;

                &.hidden {
                    margin-bottom: 0rem;
                }

            }

            .edit-lapangan {
                grid-column: 1/2;
                grid-row: 2/auto;

                 &.hidden {
                    margin-bottom: 0rem;
                }

            }
        }
    }

    @media screen and(min-width: 1120px) {
        section {
            .list-produk {
                min-width: 60rem;

            }
        }
    }

    @media screen and(min-width: 1170px) {
        section {
            .list-produk {
                min-width: 65rem;

            }
        }
    }

    @media screen and(min-width: 1235px) {
        section {
            .list-produk {
                min-width: 70rem;

            }
        }
    }

    @media screen and(min-width: 1280px) {
        section {
            padding: 4rem 8rem;
        }
    }
</style>