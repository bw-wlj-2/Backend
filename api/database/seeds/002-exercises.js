exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("exercises")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("exercises").insert([
        {
          user_id: 1,
          name: "Bench Press",
          region: "chest",
          current_pounds: 200,
          reps: 10,
          date_completed: "02/04/2020",
        },
        {
          user_id: 1,
          name: "Barbell Pullover",
          region: "chest",
          current_pounds: 200,
          reps: 10,
          date_completed: "02/04/2020",
        },
        {
          user_id: 1,
          name: "Push Ups",
          region: "chest",
          current_pounds: 200,
          reps: 10,
          date_completed: "02/04/2020",
        },
        {
          user_id: 1,
          name: "Squats",
          region: "legs",
          current_pounds: 200,
          reps: 10,
          date_completed: "02/04/2020",
        },
        {
          user_id: 1,
          name: "Lunge",
          region: "legs",
          current_pounds: 200,
          reps: 10,
          date_completed: "02/04/2020",
        },
        {
          user_id: 1,
          name: "Calf Raise",
          region: "legs",
          current_pounds: 200,
          reps: 10,
          date_completed: "02/04/2020",
        },
        {
          user_id: 1,
          name: "Deadlift",
          region: "back",
          current_pounds: 200,
          reps: 10,
          date_completed: "02/04/2020",
        },
        {
          user_id: 1,
          name: "Bent Over Row",
          region: "back",
          current_pounds: 200,
          reps: 10,
          date_completed: "02/04/2020",
        },
        {
          user_id: 1,
          name: "Power Clean",
          region: "back",
          current_pounds: 200,
          reps: 10,
          date_completed: "02/04/2020",
        },
        {
          user_id: 1,
          name: "Bicep Curl",
          region: "arms",
          current_pounds: 200,
          reps: 10,
          date_completed: "02/04/2020",
        },
        {
          user_id: 1,
          name: "Tricep Extension",
          region: "arms",
          current_pounds: 200,
          reps: 10,
          date_completed: "02/04/2020",
        },
        {
          user_id: 1,
          name: "Reverse Curl",
          region: "arms",
          current_pounds: 200,
          reps: 10,
          date_completed: "02/04/2020",
        },
        {
          user_id: 1,
          name: "Shoulder Shrug",
          region: "shoulders",
          current_pounds: 200,
          reps: 10,
          date_completed: "02/04/2020",
        },
        {
          user_id: 1,
          name: "Military Press",
          region: "shoulders",
          current_pounds: 200,
          reps: 10,
          date_completed: "02/04/2020",
        },
        {
          user_id: 1,
          name: "Upright Row",
          region: "shoulders",
          current_pounds: 200,
          reps: 10,
          date_completed: "02/04/2020",
        },
      ]);
    });
};
