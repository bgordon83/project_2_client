
const config = require('./config')
// require `store` so we have access to our `token`
// so the API knows who we anywhere
const store = require('./store')

const showWorkouts = function () {
  return $.ajax({
    method: 'GET',
    // if error, take out slash at end of next line
    url: config.apiUrl + '/workout_logs',

    headers: {
      // console.log(store.user.token)
      // console.log(store.user.token)
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showWorkout = function (formData) {
//  // console.log('this is api for viewOne ' + formData)
  return $.ajax({
    method: 'GET',
    // if error, take out slash at end of next line
    url: config.apiUrl + '/workout_logs/' + formData.workout_log.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteWorkout = function (formData) {
//  // console.log('this is api for viewOne ' + formData)
  return $.ajax({
    method: 'DELETE',
    // if error, take out slash at end of next line
    url: config.apiUrl + '/workout_logs/' + formData.workout_log.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateWorkout = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/workout_logs/' + formData.workout_log.id,
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createWorkout = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/workout_logs',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }

  })
}

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = function (formData) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    success: function () {
      $('#before-sign-in').show()
      $('#after-sign-in').hide()
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createWorkout,
  updateWorkout,
  showWorkouts,
  showWorkout,
  deleteWorkout
}
