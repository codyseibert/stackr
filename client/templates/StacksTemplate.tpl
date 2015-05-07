<div ng-repeat="stack in stacks">
    <div ng-hide="stack.isEditMode"
            ng-click="edit(stack)">
        {{stack.id}}
        {{stack.user_id}}
        {{stack.title}}
        {{stack.description}}
        {{stack.date}}
        <span ng-click="deleteStack(stack)">X</span>
    </div>

    <div ng-show="stack.isEditMode">
        
        <input ng-model="stack.user_id"></input>
        <input ng-model="stack.title"></input>
        <input ng-model="stack.description"></input>
        <input ng-model="stack.date"></input>
        <button ng-click="updateStack(stack)">Update</button>
    </div>
</div>

Create:
<br>

<input ng-model="stack.user_id" placeholder="user_id"></input>
<input ng-model="stack.title" placeholder="title"></input>
<input ng-model="stack.description" placeholder="description"></input>
<input ng-model="stack.date" placeholder="date"></input>
<button ng-click="createStack(stack)">Create</button>
