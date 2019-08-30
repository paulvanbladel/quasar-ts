

<template>
  <q-page padding>

    <div>
      <div class="form-group row">
        <label
          for="Name"
          class="col-sm-1"
        >Title</label>
        <div class="col-sm-4">
          <input
            type="text"
            id="Name"
            v-model="model.Name"
            class="form-control"
          >
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            id="isCompleted"
            v-model="model.IsCompleted"
            class="form-check-input"
          >
          <label
            for="isCompleted"
            class="form-check-label"
          >Completed</label>
        </div>
      </div>
      <div>
        <button
          type="submit"
          @click="AddToDo()"
          class="btn btn-primary"
        >Add ToDo</button>
      </div>
    </div>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="todo of ToDos"
        :key="todo.Name"
      >{{ todo.Name}}, {{ todo.IsCompleted ? "Completed" : "Not Done" }}</li>
    </ul>
  </q-page>
</template>

<script lang='ts' src='./todo-list.ts'>
</script>

<style>
</style>
