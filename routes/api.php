<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\TaskController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/tasks', [TaskController::class, 'store'])->name('tasks.store');
Route::get('/tasks', [TaskController::class, 'getTasks']);


Route::get('/tasks/{id}', [TaskController::class, 'getTasks']);
Route::put('/tasks/update-task/{id}', [TaskController::class, 'updateTask'])->name('tasks.update');
Route::delete('/tasks/delete-task/{id}', [TaskController::class, 'deleteTask'])->name('tasks.delete');
