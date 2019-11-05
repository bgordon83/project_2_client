'use strict'
const store = require('./store')

const onShowWorkoutSuccess = function (data) {
  successMessage('Workout retrieved!')
  $('#workout-message').html('')
  $('#workout-message2').html('')

  const workoutHTML = (`
  <p>ID: ${data.workout_log.id}</p>
  <p>reps: ${data.workout_log.reps}</p>
  <p>sets ${data.workout_log.sets}</p>
  <p>time spent ${data.workout_log.time_spent}</p>
  <p>routine name: ${data.workout_log.routine}</p>
    <br>
   `)
  $('#workout-message2').append(workoutHTML)
  $('#workout-message2').show()
}

const onShowWorkoutFailure = function () {
  failureMessage('Unable to get workout!')
}

const onShowWorkoutsFailure = function () {
  failureMessage('Unable to get workouts!')
}
const onDeleteWorkoutFailure = function () {
  failureMessage('Unable to delete workout')
}

const onDeleteWorkoutSuccess = function () {
  successMessage('Workout deleted!')
}

const onShowWorkoutsSuccess = function (data) {
  successMessage('Here are your workouts!')
  $('#workout-message').html('')
  $('#workout-message2').html('')
  data.workout_logs.forEach(workout => {
    const workoutHTML = (`
   <p>ID: ${workout.id}</p>
   <p>reps: ${workout.reps}</p>
  <p>sets ${workout.sets}</p>
  <p>time spent ${workout.time_spent}</p>
  <p>routine name: ${workout.routine}</p>
    <br>
   `)
    $('#workout-message').append(workoutHTML)
  })
  $('#workout-message').show()
}

const onUpdateWorkoutSuccess = () => {
  successMessage('Update workout success')
  $('#message').css('color', 'green')
}
const onUpdateWorkoutFailure = () => {
  failureMessage('Update workout failed')
  $('#message').css('color', 'red')
}
const onCreateWorkoutSuccess = () => {
  successMessage('Create workout success')
  $('#message').css('color', 'green')
}
const onCreateWorkoutFailure = () => {
  failureMessage('Create workout failed')
  $('#message').css('color', 'red')
}

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').addClass('failure')
  $('#message').removeClass('success')
  $('form').trigger('reset')
}

const onSignUpSuccess = () => {
  successMessage('Sign-up Successfully!')
  $('#message').css('color', 'green')
}

const onSignUpFailure = () => {
  failureMessage('Sign-up Failed')
  $('#message').css('color', 'red')
}
const onSignInSuccess = (responseData) => {
  successMessage('Signed in Successfully')
  $('#before-sign-in').hide()
  $('#after-sign-in').show()
  store.user = responseData.user
  $('#message').css('color', 'green')
  // $('#sign-up, #sign-in').hide()
  // $('#change-password').hide()
  // $('#sign-out').show()
  // $('#Create-Workout').show()
  // $('#Update-Workout').show()
}

const onSignInFailure = function () {
  failureMessage('Sign-in Failure')
  $('#message').css('color', 'red')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully')
  $('#message').css('color', 'green')
}

const onChangePasswordFailure = function () {
  $('#message').css('color', 'red')
  failureMessage('Changed password Failed')
}

const onSignOutSuccess = function () {
  successMessage('Signed out successfully')
  $('#message').css('color', 'green')
  // $('#sign-up, #sign-in').show()
  // $('#change-password').hide()
  // $('#sign-out').hide()
  // $('#Create-Workout').hide()
  // $('#change-password').show()
  // $('#Update-Workout').hide()
  // $('.after-sign-in').hide()
  // $('.before-sign-in').show()
  store.user = ''
}

const onSignOutFailure = function () {
  failureMessage('Sign-out failed')
  $('#message').css('color', 'red')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateWorkoutSuccess,
  onCreateWorkoutFailure,
  onUpdateWorkoutSuccess,
  onUpdateWorkoutFailure,
  onShowWorkoutsSuccess,
  onShowWorkoutsFailure,
  onDeleteWorkoutFailure,
  onDeleteWorkoutSuccess,
  onShowWorkoutFailure,
  onShowWorkoutSuccess
}
