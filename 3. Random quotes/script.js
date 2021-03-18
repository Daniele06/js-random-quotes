// Generate a quote on refresh / page loading
window.onload = randomQuote;
// Button to trigger the function
document.getElementById("butt").onclick = randomQuote;

// The function
function randomQuote() {
    // Your quotes here
    quotes = [
        'Don’t you know that you yourselves are God’s temple and that God’s Spirit dwells in your midst?  1 Corinthians 3:16',
        '“I have the right to do anything,” you say – but not everything is beneficial. “I have the right to do anything” – but I will not be mastered by anything.  1 Corinthians 6:12',
        'Be careful, however, that the exercise of your rights does not become a stumbling block to the weak.  1 Corinthians 8:9',
        'So, if you think you are standing firm, be careful that you don’t fall!  1 Corinthians 10:12',
        'So whether you eat or drink or whatever you do, do it all for the glory of God.  1 Corinthians 10:31',
        'For as woman came from man, so also man is born of woman. But everything comes from God.  1 Corinthians 11:12',
        'There are different kinds of gifts, but the same Spirit distributes them.  1 Corinthians 12:4',
        'Even so the body is not made up of one part but of many.  1 Corinthians 12:14',
        'If I speak in human or angelic tongues, but do not have love, I am only a resounding gong or a clanging cymbal.  1 Corinthians 13:1',
        'Love is patient, love is kind. It does not envy, it does not boast, it is not proud.  1 Corinthians 13:4',
        'And now these three remain: faith, hope and love. But the greatest of these is love.  1 Corinthians 13:13',
        'Follow the way of love and eagerly desire spiritual gifts, especially the gift of prophecy.  1 Corinthians 14:1',
        'Do not be misled: “Bad company corrupts good character.”  1 Corinthians 15:33',
        'Be on your guard; stand firm in the faith; be courageous; be strong.  1 Corinthians 16:33',
        'Remember this: Whoever sows sparingly will also reap sparingly, and whoever sows generously will also reap generously.  2 Corinthians 9:6',
        'There is a time for everything, and a season for every activity under the heavens  Ecclesiastes 3:1',
        'A time to weep and a time to laugh, a time to mourn and a time to dance  Ecclesiastes 3:4',
        'Therefore each of you must put off falsehood and speak truthfully to your neighbor, for we are all members of one body.  Ephesians 4:25',
        'Do not let any unwholesome talk come out of your mouths, but only what is helpful for building others up according to their needs, that it may benefit those who listen.  Ephesians 4:29',
        'Get rid of all bitterness, rage and anger, brawling and slander, along with every form of malice.  Ephesians 4:31',
        'Have nothing to do with the fruitless deeds of darkness, but rather expose them.  Ephesians 5:11',
        'Be very careful, then, how you live – not as unwise but as wise.  Ephesians 5:15',
        'For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world and against the spiritual forces of evil in the heavenly realms.  Ephesians 6:12'
    ];
    // Call a random array number
    randomQ = quotes[Math.floor(Math.random() * quotes.length)];
    // Display it in the browser page
    document.getElementById("quote").innerHTML = randomQ;
}