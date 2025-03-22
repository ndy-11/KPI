# Aplikasi KPI

## Deskripsi

Aplikasi KPI ini dirancang untuk menghitung Key Performance Indicator (KPI) karyawan berdasarkan tiga faktor utama:
  1. **Absensi** : Kehadiran karyawan dalam jam kerja.
  2. **Tugas yang Diselesaikan** : Jumlah dan kualitas tugas yang telah dikerjakan.
  3. **Rapat** : Partisipasi dalam rapat yang dijadwalkan.
Dengan aplikasi ini, perusahaan dapat secara objektif menilai kinerja karyawan dan mengoptimalkan produktivitas tim.

## Fitur

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Cara Menggunakan
### 1. Instalasi
```sh
git clone https://github.com/username/kpi-app.git
cd kpi-app
npm install  # atau pip install jika berbasis Python
```
### 2. Konfigurasi
      - Pastikan database telah dikonfigurasi dengan benar.
      - Sesuaikan parameter KPI sesuai kebijakan perusahaan.
      
### 3. Menjalankan Aplikasi
```sh
npm start  # atau python app.py jika berbasis Python
```
### 4. Mengakses Dashboard
      - Buka browser dan akses http://localhost:3000 (atau port yang dikonfigurasi).
## Formula Perhitungan KPI
KPI dihitung berdasarkan bobot berikut:
  - **Absensi**: 40%
  - **Tugas yang Diselesaikan**: 40%
  - **Rapat**: 20%

Formula:
```sh
KPI = (Absensi * 0.4) + (Tugas * 0.4) + (Rapat * 0.2)
```
## Teknologi yang Digunakan
  - Backend: Node.js
  - Frontend: React.js
  - Database: MongoDB

## Kontribusi
  Silakan lakukan fork dan pull request jika ingin berkontribusi dalam pengembangan aplikasi ini.

## Lisensi
Aplikasi ini dilisensikan di bawah MIT License.

# KPI
