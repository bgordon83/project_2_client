'use strict'
const store = require('./store')

const onShowWorkoutsSuccess = function (data) {

  successMessage('Here are your workouts!')
  $('#workout-message').html('')
  $('#workout-message2').html('')
  // data.workout.id workout
  console.log('this is from ui ' + data)
    data.workout_logs.forEach(workout => {
      const workoutHTML = (`
   <p>ID: ${workout.id}</p>
   <p>reps: ${workout.reps}</p>
  <p>sets ${workout.sets}</p>
  <p>time spent ${workout.time}</p>
  <p>routine name: ${workout.routine}</p>
    <br>
   `)
      $('#workout-message').append(workoutHTML)
    })
    $('#workout-message').show()
  }



const onUpdateWorkoutSuccess = () => {
  successMessage('Create workout success')
  $('#message').css('color', 'green')
}
const onUpdateWorkoutFailure = () => {
  failureMessage('Create workout failed')
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
  successMessage('Signed up Successfully!')
  $('#message').css('color', 'green')
}

const onSignUpFailure = () => {
  failureMessage('Signed up Failed')
  $('#message').css('color', 'red')
}
const onSignInSuccess = (responseData) => {
  successMessage('Signed in Successfully')
  store.user = responseData.user
  $('#message').css('color', 'green')
  $('#sign-up, #sign-in').hide()
  $('#change-password').hide()
  $('#sign-out').show()
  $('#Create-Workout').show()
  $('#Update-Workout').show()
}

const onSignInFailure = function () {
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
  $('#sign-up, #sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#Create-Workout').hide()
  $('#change-password').show()
  $('#Update-Workout').hide()
}

const onSignOutFailure = function () {
  failureMessage('Signed out failed')
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
  onShowWorkoutsSuccess
}
