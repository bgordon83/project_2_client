'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onShowWorkout = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.showWorkout(formData)
    .then(ui.onShowWorkoutSuccess)
    .catch(ui.onShowWorkoutFailure)
}
const onShowWorkouts = function (event) {
  event.preventDefault()
  api.showWorkouts()
    .then(ui.onShowWorkoutsSuccess)
    .catch(ui.onShowWorkoutsFailure)
}

const onDeleteWorkout = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.deleteWorkout(formData)
    .then(ui.onDeleteWorkoutSuccess)
    .catch(ui.onDeleteWorkoutFailure)
}

const onUpdateWorkout = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateWorkout(formData)
    .then(ui.onUpdateWorkoutSuccess)
    .catch(ui.onUpdateWorkoutFailure)
}

const onCreateWorkout = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createWorkout(formData)
    .then(ui.onCreateWorkoutSuccess)
    .catch(ui.onCreateWorkoutFailure)
  // console.log(api.displayWorkouts().then(response => response.json()))
}

const onSignUp = function (event) {
  // page doesnt refresh when you click on submit button
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // console.log('success')
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateWorkout,
  onUpdateWorkout,
  onShowWorkouts,
  onShowWorkout,
  onDeleteWorkout
}
