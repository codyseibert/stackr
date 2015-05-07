<div ng-repeat="card in cards">
    <div ng-hide="card.isEditMode"
            ng-click="edit(card)">
        {{card.id}}
        {{card.stack_id}}
        {{card.front}}
        {{card.back}}
        <span ng-click="deleteCard(card)">X</span>
    </div>

    <div ng-show="card.isEditMode">
        
        <input ng-model="card.stack_id"></input>
        <input ng-model="card.front"></input>
        <input ng-model="card.back"></input>
        <button ng-click="updateCard(card)">Update</button>
    </div>
</div>

Create:
<br>

<input ng-model="card.stack_id" placeholder="stack_id"></input>
<input ng-model="card.front" placeholder="front"></input>
<input ng-model="card.back" placeholder="back"></input>
<button ng-click="createCard(card)">Create</button>
