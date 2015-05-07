<div ng-repeat="user in users">
    <div ng-hide="user.isEditMode"
            ng-click="edit(user)">
        {{user.id}}
        {{user.email}}
        {{user.password}}
        <span ng-click="deleteUser(user)">X</span>
    </div>

    <div ng-show="user.isEditMode">
        
        <input ng-model="user.email"></input>
        <input ng-model="user.password"></input>
        <button ng-click="updateUser(user)">Update</button>
    </div>
</div>

Create:
<br>

<input ng-model="user.email" placeholder="email"></input>
<input ng-model="user.password" placeholder="password"></input>
<button ng-click="createUser(user)">Create</button>
