<?php

function osci_tk_figure_asset_iip_asset_options_form($form, &$form_state) {

    return osci_tk_figure_asset_options_form($form, $form_state); 
}

function osci_tk_figure_asset_layered_image_options_form($form, &$form_state) {

    $form['initial_frame'] = array(
        '#title'    => t('Set Initial Frame'),
        '#type'     => 'item',
        '#markup'   => t('TODO: Custom widget for setting frame'),
    );

    $form['reader_options'] = array(
        '#type'     => 'fieldset',
        '#title'    => t('Reader Options'),
    );

    $form['reader_options']['interaction'] = array(
        '#type'     => 'checkbox',
        '#title'    => t('Disable Interaction'),
    );

    $form['reader_options']['disable_annotation_selection'] = array(
        '#type'     => 'checkbox',
        '#title'    => t('Disable Annotation Selection'),
    );

    $form['reader_options']['thumbnail'] = array(
        '#type'     => 'file',
        '#title'    => 'Thumbnail Image',
    );

    $form['#submit'][] = 'osci_tk_figure_asset_layered_image_options_form_submit';

    return osci_tk_figure_asset_options_form($form, $form_state);
}

function osci_tk_figure_asset_layered_image_options_form_submit($form, &$form_state) {
    // Upload the file and save it
    $dest       = 'public://';
    $file = file_save_upload('thumbnail', array(), $dest);
    if (is_object($file)) {
        $form_state['values']['thumbnail'] = $file->fid;
    }
}

function osci_tk_figure_asset_image_asset_options_form($form, &$form_state) {

    return osci_tk_figure_asset_options_form($form, $form_state); 
}

function osci_tk_figure_asset_html_asset_options_form($form, &$form_state) {

    return osci_tk_figure_asset_options_form($form, $form_state); 
}