var UsersController = require ('./controllers/UsersController');
var StacksController = require ('./controllers/StacksController');
var CardsController = require ('./controllers/CardsController');
var UsersCardsController = require ('./controllers/UsersCardsController');
var LoginController = require ('./controllers/LoginController');

var InjectAccountId = require ('./middleware/InjectAccountId');

var Routes = function (app) {
    'use strict';

    // login
    app.post('/api/login',
        LoginController.login);

    // users
    app.get('/api/users',
        UsersController.getUsers);

    app.get('/api/users/:userId',
        UsersController.getUser);

    app.post('/api/users',
        UsersController.createUser);

    app.post('/api/users/:userId',
        UsersController.updateUser);

    app.delete('/api/users/:userId',
        UsersController.deleteUser);

    // stacks
    app.get('/api/stacks',
        InjectAccountId,
        StacksController.getStacks);

    app.get('/api/stacks/:stackId',
        StacksController.getStack);

    app.post('/api/stacks',
        InjectAccountId,
        StacksController.createStack);

    app.post('/api/stacks/:stackId',
        StacksController.updateStack);

    app.delete('/api/stacks/:stackId',
        StacksController.deleteStack);

    // cards
    app.get('/api/cards',
        CardsController.getCards);

    app.get('/api/cards/:cardId',
        CardsController.getCard);

    app.post('/api/cards',
        CardsController.createCard);

    app.post('/api/cards/:cardId',
        CardsController.updateCard);

    app.delete('/api/cards/:cardId',
        CardsController.deleteCard);

    // users_cards
    app.get('/api/users_cards',
        UsersCardsController.getUsersCards);

    app.get('/api/users_cards/:users_cardId',
        UsersCardsController.getUsersCard);

    app.post('/api/users_cards',
        UsersCardsController.createUsersCard);

    app.post('/api/users_cards/:users_cardId',
        UsersCardsController.updateUsersCard);

    app.delete('/api/users_cards/:users_cardId',
        UsersCardsController.deleteUsersCard);

};

module.exports = Routes;
