import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { addBooks, fetchBooks, fetchBooksRequest } from '../../actions/bookActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('addBooks()', () => {
  it('should create an action to add an array of books to the store', () => {
    const books = [
      {
        title: "Blood Meridian",
        author: "Cormac McCarthy",
      },
      {
        title: "The Windup Girl",
        author: "Paolo Bacigalupi",
      }
    ]
    const expectedAction = {
      payload: books,
      type: "ADD_BOOKS",
    }
    expect(addBooks(books)).toEqual(expectedAction);
  })
})

describe('fetchBooks()', () => {
  afterEach(() => {
    fetchMock.restore();
  })

  it('creates ADD_BOOKS action when fetching books is done', () => {
    fetchMock.getOnce('/https://www.googleapis.com/books/v1/volumes?q=windup+girl+intitle&fields=items(volumeInfo/title,volumeInfo/authors, volumeInfo/description)', 200);

    const bookResults = {
      "items": [
        {
          "volumeInfo": {
            "title": "The Windup Girl",
            "authors": [
              "Paolo Bacigalupi"
            ],
            "description": "Winner of the Hugo and Nebula awards for best novel, a new edition of the break-out science fiction debut featuring additional stories and a Q&A with the author. Anderson Lake is AgriGen’s Calorie Man, sent to work undercover as a factory manager in Thailand while combing Bangkok’s street markets in search of foodstuffs thought to be extinct, hoping to reap the bounty of history’s lost calories. Emiko is the Windup Girl, a strange and beautiful creature. Emiko is not human; she is an engineered being, grown and programmed to satisfy the decadent whims of a Kyoto businessman, but now abandoned to the streets of Bangkok. Regarded as soulless beings by some, devils by others, New People are slaves, soldiers, and toys of the rich in this chilling near future in which calorie companies rule the world, the oil age has passed, and the side effects of bio-engineered plagues run rampant across the globe. What happens when calories become currency? What happens when bio-terrorism becomes a tool for corporate profits and forces mankind to the cusp of post-human evolution? Bacigalupi delivers one of the most highly-acclaimed science fiction novels of the twenty-first century. In this brand new edition celebrating the book’s reception into the canon of celebrated modern science fiction, accompanying the text are two novelettes exploring the dystopian world of The Windup Girl, the Theodore Sturgeon Award-winning “The Calorie Man” and “Yellow Card Man.” Also included are course-work questions for use in the classroom, and an exclusive Q&A with the author describing his writing process, the political climate into which his debut novel was published, and the future of science fiction."
          }
        },
        {
          "volumeInfo": {
            "title": "The Windup Girl",
            "authors": [
              "Paolo Bacigalupi"
            ],
            "description": "Winner of the Hugo and Nebula awards for best novel, a new edition of the break-out science fiction debut featuring additional stories and a Q&A with the author. Anderson Lake is AgriGen's Calorie Man, sent to work undercover as a factory manager in Thailand while combing Bangkok's street markets in search of foodstuffs thought to be extinct, hoping to reap the bounty of history's lost calories. Emiko is the Windup Girl, a strange and beautiful creature. Emiko is not human; she is an engineered being, grown and programmed to satisfy the decadent whims of a Kyoto businessman, but now abandoned to the streets of Bangkok. Regarded as soulless beings by some, devils by others, New People are slaves, soldiers, and toys of the rich in this chilling near future in which calorie companies rule the world, the oil age has passed, and the side effects of bio-engineered plagues run rampant across the globe. What happens when calories become currency? What happens when bio-terrorism becomes a tool for corporate profits and forces mankind to the cusp of post-human evolution? Bacigalupi delivers one of the most highly-acclaimed science fiction novels of the twenty-first century. In this brand new edition celebrating the book's reception into the canon of celebrated modern science fiction, accompanying the text are two novelettes exploring the dystopian world of The Windup Girl, the Theodore Sturgeon Award-winning \"The Calorie Man\" and \"Yellow Card Man.\" Also included are course-work questions for use in the classroom, and an exclusive Q&A with the author describing his writing process, the political climate into which his debut novel was published, and the future of science fiction."
          }
        },
        {
          "volumeInfo": {
            "title": "The Windup Girl",
            "authors": [
              "Paolo Bacigalupi"
            ],
            "description": "Anderson Lake is a company man, AgriGen's Calorie Man in Thailand. Under cover as a factory manager, Anderson combs Bangkok's street markets in search of foodstuffs thought to be extinct, hoping to reap the bounty of history's lost calories. There, he encounters Emiko... Emiko is the Windup Girl, a strange and beautiful creature. One of the New People, Emiko is not human; instead, she is an engineered being, creche-grown and programmed to satisfy the decadent whims of a Kyoto businessman, but now abandoned to the streets of Bangkok. Regarded as soulless beings by some, devils by others, New People are slaves, soldiers, and toys of the rich in a chilling near future in which calorie companies rule the world, the oil age has passed, and the side effects of bio-engineered plagues run rampant across the globe. What happens when calories become currency? What happens when bio-terrorism becomes a tool for corporate profits, when bio-terrorism's genetic drift forces mankind to the cusp of post-human evolution?"
          }
        },
        {
          "volumeInfo": {
            "title": "Norwegian Wood",
            "authors": [
              "Haruki Murakami"
            ],
            "description": "Coming this October: Killing Commendatore, the much-anticipated new novel from Haruki Murakami Stunning and elegiac, Norwegian Wood first propelled Haruki Murakami into the forefront of the literary scene. Toru, a serious young college student in Tokyo, is devoted to Naoko, a beautiful and introspective young woman, but their mutual passion is marked by the tragic death of their best friend years before. As Naoko retreats further into her own world, Toru finds himself drawn to a fiercely independent and sexually liberated young woman. A magnificent coming-of-age story steeped in nostalgia, Norwegian Wood blends the music, the mood, and the ethos that were the sixties with a young man’s hopeless and heroic first love."
          }
        },
        {
          "volumeInfo": {
            "title": "We Were Liars Deluxe Edition",
            "authors": [
              "E. Lockhart"
            ],
            "description": "The New York Times bestseller We Were Liars is now available as a not-to-be-missed hardcover deluxe edition! Whether you know how it ends (shh . . . don’t tell!) or have let too many seasons go by without discovering the truth about the Liars for yourself, you will want to get your hands on the exclusive new content in this deluxe edition. And act fast: the first printing is signed by the author! A beautiful and distinguished family. A private island. A brilliant, damaged girl; a passionate, political boy. A group of four friends—the Liars—whose friendship turns destructive. A revolution. An accident. A secret. Lies upon lies. True love. The truth. We Were Liars is a modern, sophisticated suspense novel from National Book Award finalist and Printz Award honoree E. Lockhart. In addition to the bestselling novel, the collector’s edition includes: · Never-before-shared letters from Gat to Cadence · A fascinating behind-the-scenes look at the author’s creative process · The author’s hand-drawn map of Beechwood Island and the Sinclair family tree · Unique ideas for book discussions—Sinclair family–style · An excerpt from E. Lockhart’s upcoming novel Genuine Fraud—a psychological thriller that will leave you breathless Read it. And if anyone asks you how it ends, just LIE. Praise for We Were Liars: 20 Weeks on the New York Times Bestseller List “Haunting, sophisticated . . . a novel so twisty and well-told that it will appeal to older readers as well as to adolescents.” —The Wall Street Journal “A rich, stunning summer mystery with a sharp twist that will leave you dying to talk about the book with a pal or ten.” —Parade.com “Thrilling, beautiful, and blisteringly smart, We Were Liars is utterly unforgettable.” —John Green, #1 New York Times bestselling author of The Fault in Our Stars “You’re going to want to remember the title. Liars details the summers of a girl who harbors a dark secret, and delivers a satisfying, but shocking twist ending.” —Entertainment Weekly “An ambitious novel with an engaging voice, a clever plot and some terrific writing.” —The New York Times Book Review “No one should be talking about the shocking twist ending. What we can talk about is . . . [Lockhart’s] razor-sharp portrayal of a family for whom keeping up appearances is paramount and, ultimately, tragic.” —Chicago Tribune"
          }
        },
        {
          "volumeInfo": {
            "title": "The Girl with the Dragon Tattoo",
            "authors": [
              "Stieg Larsson"
            ],
            "description": "Murder mystery, family saga, love story, and financial intrigue combine into one satisfyingly complex and entertainingly atmospheric novel, the first in Stieg Larsson's thrilling Millenium series featuring Lisbeth Salander. Harriet Vanger, a scion of one of Sweden's wealthiest families disappeared over forty years ago. All these years later, her aged uncle continues to seek the truth. He hires Mikael Blomkvist, a crusading journalist recently trapped by a libel conviction, to investigate. He is aided by the pierced and tattooed punk prodigy Lisbeth Salander. Together they tap into a vein of unfathomable iniquity and astonishing corruption."
          }
        },
        {
          "volumeInfo": {
            "title": "King Lear",
            "authors": [
              "William Shakespeare"
            ]
          }
        },
        {
          "volumeInfo": {
            "title": "Miss Peregrine's Home for Peculiar Children",
            "authors": [
              "Ransom Riggs"
            ],
            "description": "The #1 New York Times Best Seller is now a major motion picture from visionary director Tim Burton, starring Eva Green, Asa Butterfield, Ella Purnell, Samuel L. Jackson, and Judi Dench. Bonus features • Q&A with author Ransom Riggs • Eight pages of color stills from the film • Sneak preview of Hollow City, the next novel in the series A mysterious island. An abandoned orphanage. A strange collection of very curious photographs. It all waits to be discovered in Miss Peregrine’s Home for Peculiar Children, an unforgettable novel that mixes fiction and photography in a thrilling reading experience. As our story opens, a horrific family tragedy sets sixteen-year-old Jacob journeying to a remote island off the coast of Wales, where he discovers the crumbling ruins of Miss Peregrine’s Home for Peculiar Children. As Jacob explores its abandoned bedrooms and hallways, it becomes clear that the children were more than just peculiar. They may have been dangerous. They may have been quarantined on a deserted island for good reason. And somehow—impossible though it seems—they may still be alive. A spine-tingling fantasy illustrated with haunting vintage photography, Miss Peregrine’s Home for Peculiar Children will delight adults, teens, and anyone who relishes an adventure in the shadows. “A tense, moving, and wondrously strange first novel. The photographs and text work together brilliantly to create an unforgettable story.”—John Green, New York Times best-selling author of The Fault in Our Stars “With its X-Men: First Class-meets-time-travel story line, David Lynchian imagery, and rich, eerie detail, it’s no wonder Miss Peregrine’s Home for Peculiar Children has been snapped up by Twentieth Century Fox. B+”—Entertainment Weekly “‘Peculiar’ doesn’t even begin to cover it. Riggs’ chilling, wondrous novel is already headed to the movies.”—People “You’ll love it if you want a good thriller for the summer. It’s a mystery, and you’ll race to solve it before Jacob figures it out for himself.”—Seventeen"
          }
        },
        {
          "volumeInfo": {
            "title": "Fahrenheit 451",
            "authors": [
              "Ray Bradbury"
            ],
            "description": "A totalitarian regime has ordered all books to be destroyed, but one of the book burners, Guy Montag, suddenly realizes their merit."
          }
        },
        {
          "volumeInfo": {
            "title": "Their Eyes Were Watching God",
            "authors": [
              "Zora Neale Hurston"
            ],
            "description": "When Janie Starks returns home, the small Black community buzzes with gossip about the outcome of her affair with a younger man"
          }
        }
      ]
    }

    const expectedActions = [
      {
        type: 'FETCH_BOOKS_REQUEST'
      },
      {
        payload: bookResults.items,
        type: 'ADD_BOOKS'
      }
    ];

    const store = mockStore({ books: [] });

    return store.dispatch(fetchBooks()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})