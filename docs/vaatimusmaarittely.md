# Vaatimusmäärittely: 

**Versio:** 1.0   
**Päivämäärä:** 30.10.2026  
**Laatija:** Ryhmä 5  

## 1. Tausta ja tavoite
Elokuvaharrastajien on vaikea keskustella elokuvista. Keskusteluissa elokuvat hukkuvat ja unohtuvat, jonka vuoksi niitä ei tule katsottua. 
**Tavoite:**
Elokuvaharrastajat voivat selata, etsiä elokuvia, nähdä arvosteluja, luoda listoja ja keskustella elokuvista ryhmissä.
**Onnistumisen mittarit (sovittava asiakkaan kanssa):**

## 2. Käyttäjät ja roolit

| Rooli | Tarve | Oikeudet |
|---|---|---|
| Ei kirjatunut käyttäjä| Selata elokuvia ja nähdä niiden perustietoja, nähdä yleisiä arvosteluja ja vastaanottaa linkillä jaettuja listoja | Selata elokuvia ja arvosteluja. etsiä elokuvia ja tarkastella linkillä jaettuja listoja |
| Kirjautunut käyttäjä | Antaa arvosteluja, muokata omia elokuvatietoja ja osallistua ryhmätoimintaan | Luoda listoja ja jakaa niitä linkillä, antaa arvosteluja, liittyä ryhmiin ja osallistu ryhmän sisäiseen keskusteluun |
| Ryhmän ylläpitäjä | Perustaa ryhmän ja hallita sen toimnintaa | Perustaa ryhmän, hyväksyä ja hylätä liittymispyyntöjä, poistaa jäseniä, antaa ylläpito-oikeuksia toisille jäsenille |
## 3. Käyttötilanne
1. Vierailija etsii elokuvia
2. Vierailija luo käyttäjän ja kirjautuu sisään
3. Käyttäjä luo ryhmän ja lisää kaverit ryhmään
4. Käyttäjä keskustelee ryhmässä
5. Käyttäjä luo oman suosikkilistan ja lisää sen ryhmään
6. Käyttäjä arvostelee elokuvan

## 4. Toiminnalliset vaatimukset

Jokaisella vaatimuksella on yksilöllinen tunniste. **Must** tarkoittaa ensimmäisen käyttökelpoisen version kannalta välttämätöntä, **Should** tärkeää mutta lykättävissä olevaa ja **Could** mahdollista lisäominaisuutta.

| ID | Vaatimus | Prioriteetti |
|---|---|---|
| FR-01 | Käyttäjä voi etsiä ja selata elokuvia ilman kirjautumista. | Must |
| FR-02 | Sovelluksen etusivulla näytetään ajankohtaisia ja kiinnostavia elokuvia | Must |
| FR-03 | Käyttäjä voi hakea elokuvia monipuolisesti (esim. osittaisella nimellä, näyttelijän tai ohjaajan mukaan). | Must |
| FR-04 | Sovellus hakee elokuvien perustiedot ja julisteet ulkoisesta rajapinnasta (TMDb). | Must |
| FR-05 | Käyttäjä voi rekisteröityä ja kirjautua palveluun käyttäjätunnuksella sekä turvallisella/laadukkaalla salasanalla. | Must |
| FR-06 | Kirjautunut käyttäjä voi tarkastella omaa profiilisivuaan ja omia antamiaan arvosteluja. | Must |
| FR-07 | Kirjatunut käyttäjä voi luoda listoja ja jakaa niitä (suosikit, myöhemmin katsottavat). | Must|
| FR-08 | Kirjautunut käyttäjä voi antaa elokuvalle arvostelun (tähtiarvio 1–5 ja/tai kirjallinen mielipide). | Must |
| FR-09 | Kaikki käyttäjät voivat lukea elokuvien julkisia arvosteluja, joissa näkyy arvostelijan nimi ja ajankohta. | Must |
| FR-10 | Kirjautunut käyttäjä voi perustaa ryhmän. | Must |
| FR-11 | Ryhmän perustaja/ylläpitäjä voi hyväksyä tai hylätä ryhmään pyrkivien liittymispyynnöt. | Must |
| FR-12 | Ryhmän jäsen voi poistua ryhmästä. | Must |
| FR-13 | Ryhmän ylläpitäjä voi poistaa jäsenen ryhmästä. | Must |
| FR-14 | Ryhmän ylläpitäjä voi antaa ylläpito-oikeuksia toiselle jäsenelle. Ylläpitäjän poistuessa oikeudet siirtyvät automaattisesti toiselle jäsenelle. | Must |
| FR-15 | Ryhmällä on oma sivu, jossa näkyvät ryhmän jäsenten suositukset ja tekemät arvostelut. | Must |
| FR-16 | Ryhmän sisällä on chat ominaisuus. | Must |
| FR-17 | Käyttäjä näkee elokuvateatterien esitysajat ja -paikat. | Should |
| FR-18 | Sovellus osaa suositella käyttäjälle samantyyppisiä elokuvia aiemman käyttöhistorian/suositusten perusteella. | Could |
| FR-19 | Ryhmä voi luoda omia yhteisiä listoja, joita vain ryhmän ylläpitäjä(t) voivat muokata. | Should |


### 4.1 Tarkemmat hyväksymiskriteerit: FR-03 ()

### 4.2 Tarkemmat hyväksymiskriteerit: FR-06 ()

## 5. Ei-toiminnalliset vaatimukset


| ID | Vaatimus | Todentaminen |
|---|---|---|

## 6. Tiedot ja alustava tietomalli

## 7. Projektin rajaus

## 8. Toteutusjärjestys ja alustava viikkosuunnitelma


| Viikko | Tavoite ja näytettävä tulos |
|---|---|

## 9. Definition of Done – milloin vaatimus on valmis?
Vaatimusta ei merkitä valmiiksi vain siksi, että se toimii kehittäjän omalla koneella. Valmis ominaisuus täyttää kaikki seuraavat ehdot:

- [ ] Toteutus vastaa hyväksyttyjä vaatimuksia ja hyväksymiskriteerejä.
- [ ] Koodi on GitHubissa, katselmoitu ja yhdistetty yhteiseen haaraan.
- [ ] Tarvittavat automaattiset testit menevät läpi.
- [ ] Ominaisuus toimii oikean palvelimen ja tietokannan kanssa.
- [ ] Ominaisuus on julkaistu Azureen ja testattu julkaistusta osoitteesta.
- [ ] Tiimi osaa esitellä ja selittää toteutuksen.
- [ ] Tarvittava dokumentaatio on päivitetty.
## 10. Avoimet kysymykset ja oletukset

| ID | Kysymys asiakkaalle | Tila |
|---|---|---|

## 11. Hyväksyntä ja muutosten hallinta

| Kenttä | Arvo |
|---|---|
| Asiakkaan edustaja | _________________________ |
| Hyväksytty versio | _________________________ |
| Hyväksynnän päivämäärä | _________________________ |
| Mahdolliset ehdot | _________________________ |

Muutokset kirjataan dokumentin versiohistoriaan ja GitHubin backlogiin. Asiakas ja tiimi arvioivat yhdessä niiden vaikutuksen aikatauluun ja prioriteetteihin.

## 12. Versiohistoria

| Versio | Päivä | Muutos |
|---|---|---|
| 0.1 | 30.10.2026 | Alustava vaatimusmäärittely |
| 1.0 | 26.10.2026 | Opetuskäyttöön viimeistelty esimerkki (ei hyväksytty oikealla asiakkaalla) |
