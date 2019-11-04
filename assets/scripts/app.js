'use strict'

// use require with a reference to bundle the file and use it in this file
// const examprle = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events.js')

$(() => {
  // $('#Create-Workout').hide()
  // $('#Update-Workout').hide()

  // your JS code goes here
  $('#after-sign-in').hide()
  $('#before-sign-in').show()
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  $('#Create-Workout').on('submit', events.onCreateWorkout)
  $('#Update-Workout').on('submit', events.onUpdateWorkout)
  $('#showWorkout').on('submit', events.onShowWorkout)
  $('#deleteWokout').on('submit', events.onDeleteWorkout)
  $('#showWorkouts').on('click', events.onShowWorkouts)
})
