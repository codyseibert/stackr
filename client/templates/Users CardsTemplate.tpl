<div ng-repeat="users_card in users_cards">
    <div ng-hide="users_card.isEditMode"
            ng-click="edit(users_card)">
        {{users_card.id}}
        {{users_card.user_id}}
        {{users_card.card_id}}
        {{users_card.correct}}
        {{users_card.date}}
        <span ng-click="deleteUsers Card(users_card)">X</span>
    </div>

    <div ng-show="users_card.isEditMode">
        
        <input ng-model="users_card.user_id"></input>
        <input ng-model="users_card.card_id"></input>
        <input ng-model="users_card.correct"></input>
        <input ng-model="users_card.date"></input>
        <button ng-click="updateUsers Card(users_card)">Update</button>
    </div>
</div>

Create:
<br>

<input ng-model="users_card.user_id" placeholder="user_id"></input>
<input ng-model="users_card.card_id" placeholder="card_id"></input>
<input ng-model="users_card.correct" placeholder="correct"></input>
<input ng-model="users_card.date" placeholder="date"></input>
<button ng-click="createUsers Card(users_card)">Create</button>
