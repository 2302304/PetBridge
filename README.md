# 🐾 PetBridge

PetBridge on digitaalinen ratkaisu eläinten adoptiohakemusten helpottamiseksi.  
Projektin tilaaja on **Vaasan Eläinsuoja ry**, ja tavoitteena on moderni web-sovellus, joka:

- Näyttää kaikki adoptoitavat eläimet verkossa  
- Mahdollistaa sähköisen adoptiohakemuksen  
- Antaa välittömän vahvistuksen käyttäjälle  

## 🧱 Arkkitehtuuri

Projekti koostuu neljästä pääosasta:

| Palvelu | Kuvaus |
|----------|--------|
| **Server A** | Pääpalvelin: Eläintietojen hallinta ja API Gateway |
| **Server B** | Adoptiopalvelin: Vastaanottaa adoptiohakemukset ja päivittää statukset |
| **Frontend** | Käyttöliittymä (Vite + React) |
| **Database** | PostgreSQL -tietokanta eläimille ja hakemuksille |

## 🚀 Käynnistys

Projektin kaikki palvelut käynnistyvät komennolla:

```bash
docker-compose up --build
