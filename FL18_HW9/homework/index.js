//write your code here

class Magazine {
    constructor(){
        this.state = 'ReadyForPushNotification';
        this.staff = []
        this.listOfArticles = {}
        this.listOfFolowers = []   
    }
    
    addFollower(name, type) {
        if(this.listOfFolowers[name]) {
            this.listOfFolowers[name].push(type)
        } else {
            this.listOfFolowers[name] = [type]
        }

        // console.log('name', name, 'type', type)
    }
    addArticle(text, type) {
        if(this.listOfArticles[type]) {
            this.listOfArticles[type].push(text)
            // console.log('TYPE', type, 'TEXT', text)
        } else {
            this.listOfArticles[type] = [text]
        }
    }


    notificateUsers() {
        for(let key of Object.keys(this.listOfFolowers)) {
            for(let i = 0; i < this.listOfFolowers[key].length; i++) {
                //console.log(key, this.listOfArticles[this.listOfFolowers[key].toString().split(',')[i]])
                this.listOfArticles[this.listOfFolowers[key].toString().split(',')[i]].forEach(el => {
                    console.log(el, key)
                })
            }
        }
    }
}

class MagazineEmployee {
    constructor(name, type, magazine) {
        this.name = name;
        this.type = type;
        this.magazine = magazine;
    }

    publish() {
        if(this.magazine.state === 'ReadyForPublish'){
            this.magazine.state = 'PublishInProgress'
            console.log(`Hello ${this.name}. You've recently published publications.`);
        }else{
            console.log(`Hello ${this.name}. You can't publish. We are creating publications now.`);
        }
    }

    approve() {
        if(this.type === 'manager' && this.magazine.state === 'ReadyForApprove') {
            this.magazine.state = 'ReadyForPublish'
            console.log(`Hello ${this.name}. You've approved the changes`);
        }else if(this.type === 'manager' && this.magazine.state === 'PublishInProgress'){
            console.log(`Hello ${this.name}. While we are publishing we can't do any actions`);
        }else{
            console.log(`You do not have permissions to do it`);
        }
    }

    addArticle(text) {
        let tempArr = []
        this.magazine.addArticle(text, this.type)
        for(let key of Object.keys(this.magazine.listOfArticles)) {
            tempArr = [...tempArr, ...this.magazine.listOfArticles[key]]
        }
        if(tempArr.length >= 5){
            this.magazine.state = 'ReadyForApprove'
        }
    }
    
}

class Follower {
    constructor(name) {
        this.name = name;
    }

    subscribeTo(magazine, type) {
        //console.log(this.name)
        magazine.addFollower(this.name, type)
    }
}

//let obj

//const magazine = new MagazineEmployee('Nana', 'manager', new Magazine());

// const magazine = new Magazine();


// const sport = new MagazineEmployee('Serhii', 'sport', magazine);
// const politics = new MagazineEmployee('Volodymyr', 'politics', magazine);

// const manager = new MagazineEmployee('Andrii', 'manager', magazine);

// sport.addArticle('sport1');
// sport.addArticle('sport2');
// sport.addArticle('sport3');

// politics.addArticle('politics1');
// politics.addArticle('politics2');
// politics.addArticle('politics3');
// politics.addArticle('politics3');
// console.log(magazine)










const magazine = new Magazine();
const manager = new MagazineEmployee('Andrii', 'manager', magazine);
const sport = new MagazineEmployee('Serhii', 'sport', magazine);
const politics = new MagazineEmployee('Volodymyr', 'politics', magazine);
const general = new MagazineEmployee('Olha', 'general', magazine);

const iryna = new Follower('Iryna');
const maksym = new Follower('Maksym');
const mariya = new Follower('Mariya');

iryna.subscribeTo(magazine, 'sport');
// console.log(magazine,"Irina", iryna)
maksym.subscribeTo(magazine, 'politics');
mariya.subscribeTo(magazine, 'politics');
mariya.subscribeTo(magazine, 'general');

sport.addArticle('something about sport');
politics.addArticle('something about politics');
general.addArticle('some general information');
politics.addArticle('something about politics again');

sport.approve() //you do not have permissions to do it
manager.approve();//Hello Andrii. You can't approve. We don't have enough of publications
politics.publish(); //Hello Volodymyr. You can't publish. We are creating publications now.
sport.addArticle('news about sport'); 

manager.approve(); //Hello Andrii. You've approved the changes

sport.publish(); //Hello Serhii. You've recently published publications.
magazine.notificateUsers()

// /*
// something about sport Iryna
// news about sport Iryna
// something about politics Maksym
// something about politics Mariya
// something about politics again Maksym
// something about politics again Mariya
// some general information Mariya
// */
manager.approve('news about sport'); // Hello Andrii. While we are publishing we can't do any actions

console.log(magazine);