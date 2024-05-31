<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use Carbon\Carbon;

class TaskController extends Controller
{
    public function index()
    {
        // Ambil semua task dari database
        $tasks = Task::all();
        $days = $this->calculateDays();
        $currentDate = Carbon::now();

        // Loop melalui setiap task dan hitung hari tersisa
        foreach ($tasks as $task) {
            $dueDate = Carbon::parse($task->due_date);
            $daysLeft = $dueDate->diffInDays($currentDate, false);

            // Tentukan pesan berdasarkan hari tersisa
            if ($daysLeft == 3) {
                $task->days_left_message = "3 days left!";
            } else {
                $task->days_left_message = "$daysLeft days left.";
            }
        }

        // Kirim data tasks ke view
        return view('hackathon-content/dash_hackathon', compact('days', 'tasks'));
    }


    public function store(Request $request)
    {

        $task = new Task();
        $task->name = $request->name;
        $task->color = '#FFA500';
        $task->start = $request->start;
        $task->finish = $request->finish;
        $task->detail = $request->detail;
        $task->person = $request->person;
        $task->save();

        return redirect()->route('dashboard_hackathon');
    }

    public function getTasks()
    {
        // Fetch all tasks from the database
        $tasks = Task::all();
        return response()->json($tasks);
    }

    // Hackathon 1st Day 2
    public function st_hackathonDay2()
    {
        $days = $this->calculateDays();

        return view('hackathon-content/1st_hackathon_day2', compact('days'));
    }

    public function store2(Request $request)
    {

        $task = new Task();
        $task->name = $request->name;
        $task->color = '#FFA500';
        $task->start = $request->start;
        $task->finish = $request->finish;
        $task->detail = $request->detail;
        $task->person = $request->person;
        $task->save();

        return redirect()->route('1st_hackathon_day2');
    }

    // 1st Hackathon Day 3
    public function st_hackathonDay3()
    {
        $days = $this->calculateDays();

        return view('hackathon-content/1st_hackathon_day3', compact('days'));
    }

    public function store3(Request $request)
    {

        $task = new Task();
        $task->name = $request->name;
        $task->color = '#FFA500';
        $task->start = $request->start;
        $task->finish = $request->finish;
        $task->detail = $request->detail;
        $task->person = $request->person;
        $task->save();

        return redirect()->route('1st_hackathon_day3');
    }

    public function updateTask(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'start' => 'required|date',
            'finish' => 'required|date',
            'detail' => 'nullable|string',
            'person' => 'required|string|max:255',
        ]);

        try {
            $task = Task::findOrFail($id);
            $task->updateTask($validatedData);

            return response()->json(['message' => 'Task updated successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to update task', 'error' => $e->getMessage()], 500);
        }
    }

    public function deleteTask($id)
    {
        try {
            // Temukan task berdasarkan ID
            $task = Task::findOrFail($id);

            // Hapus task
            $task->delete();

            // Beri respons sukses
            return response()->json(['message' => 'Task berhasil dihapus'], 200);
        } catch (\Exception $e) {
            // Tangani jika ada kesalahan
            return response()->json(['message' => 'Gagal menghapus task', 'error' => $e->getMessage()], 500);
        }
        return redirect()->route('dashboard_hackathon');
    }

    // Private Function //
    private function calculateDays()
    {
        $targetDate = strtotime('2024-06-03');
        $currentDate = time();
        return ceil(($targetDate - $currentDate) / (60 * 60 * 24));
    }
}
