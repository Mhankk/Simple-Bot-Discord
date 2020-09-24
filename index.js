const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();
var ineed = require('ineed');
const ytdl = require("ytdl-core");
const queue = new Map();
const cheerio = require('cheerio');
var request = require('request');

//koneksi
bot.login(process.env.TOKEN);
//notifikasi
const activities_list = [
    "With loli", 
    "Ara ara",
    "with Onee-san", 
    "Instagram @wibuclips",
    "My D!ck"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

bot.on('ready', () => {
    console.log('Online\n');
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        bot.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 20000); // Runs this every 20 seconds.
});


//aksi pesan
bot.on("message", async message => {

  if (message.author.id !== config.ownerID) return;
  if (message.content.indexOf(config.prefix) !== 0) return;
 
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
switch (command) {
	case "test" : 
    var tst = new Discord.MessageEmbed()
        .setColor('#f700ff')
        .setTitle('Running Index 2')
        .setDescription('No Error for now!')
    message.channel.send(tst);break;


	   case "scrap" : 
       console.log('Scrapper is Running')
    var  urel = 'https://www.picuki.com/profile/wibuclips';
    request(urel, function (error, response, body) {
    var $ = cheerio.load(body);

    $('div.photo').each(function(i, element){
      var src = $('.post-image').attr("src");
      var a = JSON.stringify(src);
        var res = a.substring(0,1000);

    const sc2 = new Discord.MessageEmbed()
        .setTitle('Result')
        .setDescription(res)
        message.channel.send(sc2);
        });
    });
 break;

 case "au" : 
 console.log('Anime Update Running')

ineed.collect.hyperlinks.from('https://anoboy.stream',
    function (err, response, result) {
        var a = JSON.stringify(result);
        var res = a.substring(0,100)

    const sc3 = new Discord.MessageEmbed()
        .setTitle('Result')
        .setDescription(res,/n/)
        message.channel.send(sc3);
        console.log(result);
    });
 break;

    case "ping" :
    var Pin = new Discord.MessageEmbed()
        .setColor('#f700ff')
        .setTitle('Network Stats')
        .setDescription("Your ping is `" + `${Date.now() - message.createdTimestamp}` + " ms`")
    message.channel.send(Pin);break;

    case "hanekawa" :
    	const hanekawa = new Discord.MessageEmbed()
    	.setColor('#fc03f4')
    	.setImage('https://otsukai.com/optimized?key=public/item/10969/original-5cbc2083b6128.jpeg')
    	.addFields(
    		{name : "Japanese",value : "斜め七十七度の並びで泣く泣く嘶くナナハン七台難なく並べて長眺め"},
    		{name : "Romaji",value : "Naname nanajyuunana-do no narabi de nakunaku inanaku nanahan nanadai nannaku narabete naganagame"},
            {name : "Neko", value : "Nyanyame nyanyajyuunyanya-do nyo nyarabi de nyakunyaku inyanyaku nyanyahan nyanyadai nyannyaku nyarabete nyaganyagame"}
    		)
    	message.channel.send(hanekawa); 
    	console.log('hanekawa terkirim');
    break;
    case "joget" :
    	const exampleEmbed = new Discord.MessageEmbed()
    	.setImage('https://cdn.discordapp.com/emojis/604489121406255145.gif?v=1');
    	message.channel.send(exampleEmbed); 
    break;
    case "joget1" :
    	const exampleEmbed1 = new Discord.MessageEmbed()
    	.setImage('https://cdn.discordapp.com/emojis/577068351118114816.gif?v=1');
    	message.channel.send(exampleEmbed1); 
    break;
    case "joget2" :
    	const exampleEmbed2 = new Discord.MessageEmbed()
    	.setImage('https://cdn.discordapp.com/emojis/686013935488729128.gif?v=1');
    	message.channel.send(exampleEmbed2); 
    break;
    case "joget3" :
    	const exampleEmbed3 = new Discord.MessageEmbed()
    	.setImage('https://cdn.discordapp.com/emojis/602432823886086190.gif?v=1');
    	message.channel.send(exampleEmbed3); 
    break;
        case "invite" :
        const inVt = new Discord.MessageEmbed()
        .setTitle('Wannna Invite Me?')
        .setDescription('https://discord.com/oauth2/authorize?client_id=645682175114608650&scope=bot&permissions=57724168')
        message.channel.send(inVt); 
    break;
    case "link" :
        const LinK = new Discord.MessageEmbed()
        .setTitle('Wannna Join us?')
        .setDescription('https://discord.gg/z9qaWtW')
        message.channel.send(LinK); 
    break;

    case "post" :
    //Post Ig
		const exEmbed = new Discord.MessageEmbed()
		.setColor('#f700ff')
		.setTitle('Awas voloumenya')
		.setURL('https://www.instagram.com/p/CElTew2jpSZ/') //ubah disini
		.setAuthor('wibuclips', 'https://wibclips.000webhostapp.com/klip/logo.jpg', 'https://instagram.com/wibuclips/')
		.setDescription('klik judul diatas untuk melihat postingan')
		.setThumbnail('https://wibclips.000webhostapp.com/klip/logo.jpg')
		.addFields(
			{ name: 'Instagram', value: '@wibuclips' },
			{ name: 'Kategori', value: '#scene', inline: true }, //ubah disini
			{ name: 'Mentions', value: '@everyone', inline: true })
		.setImage('https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/118603553_230704348337610_576817672694083969_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=ZwRqPz_TnX4AX8qj23v&oh=6229c25522b7cfb1f2a7b62b3047a4f6&oe=5F506B93')
		.setTimestamp()
		.setFooter('wibuclips', 'https://wibclips.000webhostapp.com/klip/logo.jpg');
		message.channel.send(exEmbed).then(sentMessage => {
		sentMessage.react('❤️');
	});
	console.log('Post Terkirim');
    break;
    case "hug" :
    let targetMember = message.mentions.members.first();
        if(!targetMember) return message.reply('lu ga punya pasangan ya kok ga ditag?');
    const hugged = new Discord.MessageEmbed()
        .setColor('#f700ff')
        .setDescription(`<@${message.author.id}> has hugged <@${targetMember.user.id}>`)
        .setImage('https://cdn.weeb.sh/images/SJfEks3Rb.gif')
         message.channel.send(hugged);
    console.log('Hug Send');
    break;


}//switch

//hapus pesan min.14 hari
 if (message.content.startsWith(`kim.purge`)) { // This time we have to use startsWith, since we will be adding a number to the end of the command.
        // We have to wrap this in an async since awaits only work in them.
        async function purge() {
            message.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.


            // We want to check if the argument is a number
            if (isNaN(args[0])) {
                // Sends a message to the channel.
                message.channel.send('Please use a number as your arguments. \n Usage: kim.purge <amount>'); //\n means new line.
                // Cancels out of the script, so the rest doesn't run.
                return;
            }

            const fetched = await message.channel.messages.fetch({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
            console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting

            // Deleting the messages
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.

        }

        // We want to make sure we call the function whenever the purge command is run.
        purge(); // Make sure this is inside the if(msg.startsWith)

    };

  if (!message.content.startsWith(config.prefix)) return;

  const serverQueue = queue.get(message.guild.id);

  if (message.content.startsWith(`kim.play`)) {
    execute(message, serverQueue);
    return;
  } else if (message.content.startsWith(`kim.skip`)) {
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`kim.stop`)) {
    stop(message, serverQueue);
    return;
   } 
   else if (message.content.startsWith(`kim.newch`)) { //membuat channel baru (belum sempurna)
    message.guild.channels.create('Private', {
  type: 'voice',
  category :'728695338839572561',
  permissionOverwrites: [
     {
       id: message.author.id,
       deny: ['VIEW_CHANNEL'],
    },
  ],
})
    var chnN = new Discord.MessageEmbed()
    .setColor('#c500ff')
    .setTitle('Private channel')
    .setDescription("telah dibuat")
    message.channel.send(chnN);
    return;
   } 


async function execute(message, serverQueue) {
  const args = message.content.split(" ");

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "**Masuk voice channel dlu ajg!**"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "Gw gapunya izin buat masuk dichannel nya su!"
    );
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
    title: songInfo.title,
    url: songInfo.video_url
  };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    var addN = new Discord.MessageEmbed()
    .setColor('#c500ff')
    .setTitle(`${song.title}`)
    .setDescription("sudah ditambahkan")
    return message.channel.send(addN);
    console.log(`${song.title} ditambahkan`)
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "**Masuk voice channel dlu ajg!**"
    );
  if (!serverQueue)
    return message.channel.send("ga ada lagu yang tersisa!");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "**Masuk voice channel dlu ajg!**"
    );
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    var leaF = new Discord.MessageEmbed()
    .setColor('#c500ff')
    .setTitle("Dah ga ada lagu di queue cuk!")
    .setDescription("Gw Cabut dlu,Bye!")
    message.channel.send(leaF);
    queue.delete(guild.id);
    console.log("im leave");
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  var plyN = new Discord.MessageEmbed()
    .setColor('#c500ff')
    .setTitle(`${song.title}`)
    .setDescription("sedang diputar")
  serverQueue.textChannel.send(plyN);
  console.log(`${song.title} diputar`)
}
});//bot on

bot.on("message" , function(message){
  if(message.author.bot) return;
  
  var ask3 = ["lu spa?","lu spa","lu siapa?","Lu spa?","Lu siapa?","lo spa?","lo spa","lo siapa","lo siapa?","Anda siapa?","anda siapa?","anda siapa","Anda siapa"];
    if (message.author.equals(bot.user)) return;
    if (ask3.includes(message.content)) {
        message.reply("Saya Asisten nya Pak Keem");
    }
    if (message.author.equals(bot.user)) return;
    if (message.mentions.has('557022050989113348')) {
    message.reply('Tunggu Ya! Pak Keem-san akan segera membalas :)')
	     .then(msg => {
    msg.delete({ timeout: 10000 })
  })
  .catch(console.error);
}
});
