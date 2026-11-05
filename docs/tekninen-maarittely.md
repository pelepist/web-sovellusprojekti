# Tekninen määrittely

## Projektin kuvaus

Verkkosovellus, jonka avulla käyttäjät voivat etsiä elokuvia, kirjoittaa arvosteluja, luoda omia elokuvalistoja sekä osallistua ryhmien toimintaan. Sovellus hyödyntää TMDB API -rajapintaa elokuvatietojen hakemiseen.

## Tavoitteet

Projektin tavoitteena on tarjota käyttäjille helppokäyttöinen alusta elokuvien selailuun, arviointiin, omien elokuvalistojen ylläpitoon sekä muiden elokuvaharrastajien kanssa käymiseen.

## Tekninen toteutus

Projektin yhteinen tekninen perusta on:

- React
- Express
- PostgreSQL
- GitHub
- Azure
- TMDB API

### Frontend

Frontend toteutetaan Reactilla. Käyttöliittymä tarjoaa käyttäjälle mahdollisuuden selata elokuvia, kirjoittaa arvosteluja, hallita listoja sekä käyttää ryhmien toimintoja.

### Backend

Backend toteutetaan Expressillä. Backend huolehtii sovelluksen toiminnallisuuksista, tietokantayhteyksistä, käyttäjien tunnistamisesta sekä TMDB API -rajapinnan käytöstä.

### Tietokanta

Tietokantana käytetään PostgreSQL:ää. Tietokanta tallentaa sovelluksen käyttäjät, elokuvat, arvostelut, ryhmät, listat, chat-viestit sekä elokuvateattereiden näytöstiedot.

## Järjestelmäarkkitehtuuri
<img width="1000" height="250" alt="järjestelmäarkkitehtuuri" src="https://github.com/user-attachments/assets/851217df-ba6a-44e2-9820-01b92a0e783e" />

Sovelluksen käyttöliittymä toteutetaan Reactilla. React kommunikoi Express REST API:n kanssa, joka käsittelee sovelluksen logiikan. Express hakee ja tallentaa tietoja PostgreSQL-tietokantaan sekä hakee elokuvatietoja TMDB API:sta. Sovellus julkaistaan Azure App Service -ympäristössä.

## Tietokantarakenne
<img width="661" height="676" alt="erkaavio" src="https://github.com/user-attachments/assets/54e0e2e9-ce12-4283-ae66-c192843187ae" />

Tietokanta koostuu seuraavista tauluista:

- users
- movies
- reviews
- groups
- group_members
- lists
- list_movies
- group_chat
- cinema_info

## Toiminnallisuudet

### Käyttäjät

- Rekisteröityminen
- Kirjautuminen
- Uloskirjautuminen

### Elokuvat

- Elokuvien haku
- Elokuvien selaaminen
- Elokuvatietojen tarkastelu

### Arvostelut

- Arvostelun lisääminen
- Arvostelun muokkaaminen
- Arvostelun poistaminen

### Ryhmät

- Ryhmän luominen
- Ryhmään liittyminen
- Ryhmän jäsenien hallinta
- Ryhmächatin käyttö

### Listat

- Oman listan luominen
- Ryhmälistan luominen
- Elokuvien lisääminen listalle
- Elokuvien poistaminen listalta

## Tietoturva

- Salasanat tallennetaan hashattuina.
