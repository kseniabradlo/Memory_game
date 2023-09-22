/**
 * Колода карт. Класс отвечает за создание и тасование карт. Содержит список изображений карт.
 */
class Deck {
    #cardsImages = ["eric.png", "Fionek.png", "palac.png", "Rak.png", "siostry.png", "syrenka.png",
        "urszula.png", "Wyspa.png", "ptak.png", "krol.png"];

    constructor() {
        this.cards = [];
        this.#cardsImages.forEach(image => {
            this.cards.push(new Card(image));
            this.cards.push(new Card(image));
        });
    }

    shuffle() {
        this.cards.sort(() => Math.random() - 0.5);
    }

    removeCard(card) {
        let index = this.cards.findIndex(item => item.imagePath == card.imagePath);
        if (index != -1) {
            this.cards.splice(index, 1);
            card.disconectFromDOM();
        }
    }
}